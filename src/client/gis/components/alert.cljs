(ns gis.components.alert
  (:require [gis.components.formatted-time :as formatted-time]))

(def status-to-variant {:inert "alert-primary"
                        :warning "alert-warning"
                        :active "alert-secondary"
                        :success "alert-success"
                        :error "alert-danger"})

(defn message
  [id date status text]
  [:div {:class (str "alert " (status-to-variant (keyword status))) 
         :style {:white-space "pre-line"}
         :role "alert"} 
   [formatted-time/component date]
   [:span {:class "ml-1" :color "inherit"} text]])

(defn alert
  [messages] 
  (into [:<>] (map (fn [[_ {:keys [id date status text]}]] [message id date status text])) messages))



