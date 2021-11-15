(ns gis.components.submit-button
  (:require 
    [reagent.core :as reagent]
    ["@fortawesome/react-fontawesome" :refer [FontAwesomeIcon]]
    ["@fortawesome/free-solid-svg-icons" :refer [faSpinner faExclamation faCheck faArrowUp]]
    [utilities.bootstrap :as utilities-bootstrap]))

(def status-to-icon {:inert {}
                     :active {:icon faSpinner :spin true :size "1x"}
                     :success {:icon faCheck :spin false :size "1x"}
                     :warning {:icon faExclamation :spin false :size "1x"}
                     :error {:icon faExclamation :spin false :size "1x"}})

(def status-to-variant {:inert "btn-primary"
                        :warning "btn-warning"
                        :active "btn-secondary"
                        :success "btn-success"
                        :error "btn-danger"})

(defn date-to-time [date] (str (apply str (take-last 2 (str "0" (.getHours date)))) ":" (apply str (take-last 2 (str "0" (.getMinutes date)))) ":" (apply str (take-last 2 (str "0" (.getSeconds date)))) "." (apply str (take-last 3 (str "00" (.getMilliseconds date))))))

(defn view
  [status title icon]
    [:button {:class (str "btn btn-lg mx-3 d-inline-flex flex-row justify-content-between " (status-to-variant (keyword status)))
              :type "submit"
              :style {:min-width "118px"}
              :disabled (some #(= status %) ["active" "success"])}
     [:> FontAwesomeIcon (merge {:class "mt-1" :icon icon :size "1x" :spin false} (status-to-icon (keyword status)))]
     [:span {:class "ml-2"} title]])

(defn component
  ([status] [view status "Submit" faArrowUp])
  ([status title] [view status title faArrowUp])
  ([status title icon] [view status title icon]))

