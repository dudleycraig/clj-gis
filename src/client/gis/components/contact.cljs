(ns gis.components.contact
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            ["@fortawesome/react-fontawesome" :refer [FontAwesomeIcon]]
            ["@fortawesome/free-solid-svg-icons" :refer [faEnvelope faImages faHome faUser]]
            [gis.db :as db]
            [gis.subs :as subscriptions]
            [gis.events :as events]
            [utilities.form :as form]
            [gis.components.feedback :refer [feedback]]
            [gis.components.alert :refer [alert]]
            [gis.components.submit-button :as submit-button]))

(defn view [data]
  [:form {:class "container-fluid d-flex flex-column justify-content-left"
          :noValidate true
          :on-submit (fn [event] (.preventDefault event) (re-frame/dispatch [::events/set-form-on-submit event "http://197.242.147.210:80/contact"]))}

   [:div {:class "row" :style {:min-height "120px"}}
    [:div {:class "form-group col-md-6 col-12"}
     [:div {:class "md-form mb-0"}
      [:div {:class "form-text text-left muted"} (str "* Refer to you, the sender as?")]
      [:div {:class "input-group"}
       [:div {:class "input-group-prepend"}
        [:div {:class "input-group-text"}
         [:> FontAwesomeIcon {:icon faUser :size "1x"}]]]
       [:input {:class (str "form-control " (if (= @(re-frame/subscribe [::subscriptions/get-field-property-by-key :name :status]) "error") "is-invalid"))
                :id "name"
                :name "name"
                :on-change #(re-frame/dispatch-sync [::events/set-field-on-event %])
                :value @(re-frame/subscribe [::subscriptions/get-field-property-by-key :name :value])
                :type "text"
                :disabled (some #(= @(re-frame/subscribe [::subscriptions/get-form-property-by-key :status]) %) ["active" "success"])
                :placeholder "Name"
                :aria-label "Name"
                :aria-describedby "Sender Reference"}]
       [feedback @(re-frame/subscribe [::subscriptions/get-field-property-by-key :name :messages])]]]]

    [:div {:class "form-group col-md-6 col-12"}
     [:div {:class "md-form mb-0"}
      [:div {:class "form-text text-left muted"} (str "* Email for me to respond to?")]
      [:div {:class "input-group"}
       [:div {:class "input-group-prepend"}
        [:div {:class "input-group-text"}
         [:> FontAwesomeIcon {:icon faEnvelope :size "1x"}]]]
       [:input {:class (str "form-control " (if (= @(re-frame/subscribe [::subscriptions/get-field-property-by-key :email :status]) "error") "is-invalid"))
                :id "email"
                :name "email"
                :on-change #(re-frame/dispatch-sync [::events/set-field-on-event %])
                :value @(re-frame/subscribe [::subscriptions/get-field-property-by-key :email :value])
                :type "text"
                :disabled (some #(= @(re-frame/subscribe [::subscriptions/get-form-property-by-key :status]) %) ["active" "success"])
                :placeholder "Email"
                :aria-label "Email"
                :aria-describedby "Email Response Address"}]
       [feedback @(re-frame/subscribe [::subscriptions/get-field-property-by-key :email :messages])]]]]]

   [:div {:class "row" :style {:min-height "160px"}}
    [:div {:class "form-group col-md-12"}
     [:div {:class "md-form"}
      [:div {:class "form-text text-left muted"} (str "* In what way can I help?")]
      [:div {:class "input-group"}
       [:textarea {:class (str "form-control " (if (= @(re-frame/subscribe [::subscriptions/get-field-property-by-key :query :status]) "error") "is-invalid"))
                   :id "query"
                   :name "query"
                   :on-change #(re-frame/dispatch-sync [::events/set-field-on-event %])
                   :value @(re-frame/subscribe [::subscriptions/get-field-property-by-key :query :value])
                   :rows "2"
                   :disabled (some #(= @(re-frame/subscribe [::subscriptions/get-form-property-by-key :status]) %) ["active" "success"])
                   :placeholder "Query"
                   :aria-label "Query"
                   :aria-describedby "Email Body Query"}]
       [feedback @(re-frame/subscribe [::subscriptions/get-field-property-by-key :query :messages])]]]]]

   [:div {:class "row mb-3"}
    [:div {:class "text-center col-md-12"}
     [submit-button/component @(re-frame/subscribe [::subscriptions/get-form-property-by-key :status])]
     [:button {:class "btn btn-danger btn-lg mx-1" :type "reset" :on-click #(re-frame/dispatch-sync [::events/set-initial-form {}])}
      [:span (str "Reset")]]]]

   [:div {:class "row mt-3"}
    [:div {:class "text-center col-md-12"}
     [alert @(re-frame/subscribe [::subscriptions/get-form-property-by-key :messages])]]]])

(defn component 
  ([] 
   (re-frame/dispatch-sync [::events/set-initial-form {}]) 
   (fn [] [view {}]))

  ([state] 
   (re-frame/dispatch-sync [::events/set-initial-form state]) 
   (fn [] [view state])))

