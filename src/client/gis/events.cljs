(ns gis.events
  (:require [re-frame.core :as re-frame]
            [gis.db :as db]
            [ajax.core :as ajax]
            [utilities.form :as form]))

(re-frame/reg-event-db
  ::set-initial-form
  (fn
    [_ [_ data]]
    (merge
      db/contact
      {:status "inert" :messages {} :fields (form/set-field-data (db/contact :fields) data)})))

(re-frame/reg-event-db
 ::set-form
 (fn
   [db [_ data]]
   (merge db data)))

(re-frame/reg-event-db 
  ::set-field-on-event 
  (fn 
    [db [_ event]] 
    (let [key (keyword (-> event .-target .-name))
          field (get-in db [:fields key])
          fields (assoc (db :fields) key (form/get-field-for-event field event))
          status (if (form/has-form-errors fields) "error" "inert")] 
          (merge db {:status status :fields fields}))))

(re-frame/reg-event-db
 ::set-form-on-submit
 (fn
   [db [_ event service]]
   (let [fields (form/validate-form (db :fields))
         status (if (form/has-form-errors fields) "error" "active")]
     (if (= status "active")
       (ajax/ajax-request
        {:uri service
         :method :post
         :params (form/get-field-data fields)
         :headers {:accept "Application/json" :charset "utf-8"}
         :format (ajax/json-request-format)
         :response-format (ajax/json-response-format {:keywords? true})
         :handler (fn
                    [[ok response]]
                    (let [status (if ok "success" "error")
                          message (if
                                   (contains? response :message)
                                    (merge {:id "response" :date (js/Date.)} (response :message))
                                    {:id "response" :status (if ok "warning" "error") :date (js/Date.) :text "Server response is ambiguous."})]
                      (re-frame/dispatch [::set-form {:status status :messages {:response message}}])))
         :error-handler (fn
                          [{:keys [status status-text]}]
                          (re-frame/dispatch [::set-form {:status "error" :messages {:response {:id "response" :status "error" :date (js/Date.) :text status-text}}}]))}))
     (merge db {:fields fields :status status}))))

