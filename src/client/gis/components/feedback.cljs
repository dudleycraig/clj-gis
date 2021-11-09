(ns gis.components.feedback
  (:require [gis.components.formatted-time :as formatted-time]))

(def status-to-feedback {:inert ""
                         :warning ""
                         :active ""
                         :success "valid-feedback"
                         :error "invalid-feedback"})

(defn message
  [id date status text]
  [:div {:class (str (status-to-feedback (keyword status)) " text-left") 
         :style {:white-space "pre-line"}} 
   [formatted-time/component date]
   [:span {:class "ml-1"} text]])

(defn feedback
  [messages]
  (into [:<>] (map (fn [[_ {:keys [id date status text]}]] [message id date status text])) messages))
