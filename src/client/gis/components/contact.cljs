(ns gis.components.contact
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax]
            ["@fortawesome/react-fontawesome" :refer [FontAwesomeIcon]]
            ["@fortawesome/free-solid-svg-icons" :refer [faEnvelope faImages faHome faUser]]
            [gis.db :as db]
            [utilities.form :as form]
            [gis.components.feedback :refer [feedback]]
            [gis.components.alert :refer [alert]]
            [gis.components.submit-button :as submit-button]))

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

(re-frame/reg-sub 
  ::get-field-by-key 
  (fn 
    [db [_ field-key]] 
    (get-in db [:fields field-key])))

(re-frame/reg-sub 
  ::get-field-property-by-key 
  (fn 
    [db [_ field-key property-key]] 
    (get-in db [:fields field-key property-key])))

(re-frame/reg-sub 
  ::get-form-property-by-key
  (fn 
    [db [_ property-key]] 
    (db property-key)))

(defn view [data]
  [:form {:class "container-fluid d-flex flex-column justify-content-left"
          :noValidate true
          :on-submit (fn [event] (.preventDefault event) (re-frame/dispatch [::set-form-on-submit event "http://197.242.147.210:80/contact"]))}

   [:div {:class "row" :style {:min-height "120px"}}
    [:div {:class "form-group col-md-6 col-12"}
     [:div {:class "md-form mb-0"}
      [:div {:class "form-text text-left muted"} (str "* Refer to you, the sender as?")]
      [:div {:class "input-group"}
       [:div {:class "input-group-prepend"}
        [:div {:class "input-group-text"}
         [:> FontAwesomeIcon {:icon faUser :size "1x"}]]]
       [:input {:class (str "form-control " (if (= @(re-frame/subscribe [::get-field-property-by-key :name :status]) "error") "is-invalid"))
                :id "name"
                :name "name"
                :on-change #(re-frame/dispatch-sync [::set-field-on-event %])
                :value @(re-frame/subscribe [::get-field-property-by-key :name :value])
                :type "text"
                :disabled (some #(= @(re-frame/subscribe [::get-form-property-by-key :status]) %) ["active" "success"])
                :placeholder "Name"
                :aria-label "Name"
                :aria-describedby "Sender Reference"}]
       [feedback @(re-frame/subscribe [::get-field-property-by-key :name :messages])]]]]

    [:div {:class "form-group col-md-6 col-12"}
     [:div {:class "md-form mb-0"}
      [:div {:class "form-text text-left muted"} (str "* Email for me to respond to?")]
      [:div {:class "input-group"}
       [:div {:class "input-group-prepend"}
        [:div {:class "input-group-text"}
         [:> FontAwesomeIcon {:icon faEnvelope :size "1x"}]]]
       [:input {:class (str "form-control " (if (= @(re-frame/subscribe [::get-field-property-by-key :email :status]) "error") "is-invalid"))
                :id "email"
                :name "email"
                :on-change #(re-frame/dispatch-sync [::set-field-on-event %])
                :value @(re-frame/subscribe [::get-field-property-by-key :email :value])
                :type "text"
                :disabled (some #(= @(re-frame/subscribe [::get-form-property-by-key :status]) %) ["active" "success"])
                :placeholder "Email"
                :aria-label "Email"
                :aria-describedby "Email Response Address"}]
       [feedback @(re-frame/subscribe [::get-field-property-by-key :email :messages])]]]]]

   [:div {:class "row" :style {:min-height "160px"}}
    [:div {:class "form-group col-md-12"}
     [:div {:class "md-form"}
      [:div {:class "form-text text-left muted"} (str "* In what way can I help?")]
      [:div {:class "input-group"}
       [:textarea {:class (str "form-control " (if (= @(re-frame/subscribe [::get-field-property-by-key :query :status]) "error") "is-invalid"))
                   :id "query"
                   :name "query"
                   :on-change #(re-frame/dispatch-sync [::set-field-on-event %])
                   :value @(re-frame/subscribe [::get-field-property-by-key :query :value])
                   :rows "2"
                   :disabled (some #(= @(re-frame/subscribe [::get-form-property-by-key :status]) %) ["active" "success"])
                   :placeholder "Query"
                   :aria-label "Query"
                   :aria-describedby "Email Body Query"}]
       [feedback @(re-frame/subscribe [::get-field-property-by-key :query :messages])]]]]]

   [:div {:class "row mb-3"}
    [:div {:class "text-center col-md-12"}
     [submit-button/component @(re-frame/subscribe [::get-form-property-by-key :status])]
     [:button {:class "btn btn-danger btn-lg mx-1" :type "reset" :on-click #(re-frame/dispatch-sync [::set-initial-form {}])}
      [:span (str "Reset")]]]]

   [:div {:class "row mt-3"}
    [:div {:class "text-center col-md-12"}
     [alert @(re-frame/subscribe [::get-form-property-by-key :messages])]]]])

(defn component 
  ([] 
   (re-frame/dispatch-sync [::set-initial-form {}]) 
   (fn [] [view {}]))

  ([data] 
   (re-frame/dispatch-sync [::set-initial-form data]) 
   (fn [] [view data])))



