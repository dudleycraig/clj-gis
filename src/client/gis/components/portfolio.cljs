(ns gis.components.portfolio
  (:require [reagent.core :as reagent]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.core.async :as async]
            [gis.services.companies :as companies]
            [gis.services.technologies :as technologies]
            [gis.services.projects :as projects]
            ["firebase/auth"]
            ["firebase/firestore" :refer [collection getDocs getFirestore]]
            [gis.components.formatted-date :as formatted-date]))

(defn get-results
  [query]
  (if query
    (reduce (fn [accumulator doc] (merge accumulator (assoc (js->clj (. doc data) :keywordize-keys true) :id (. doc -id)))) [] (. query -docs))
    []))

(defn set-ratom-from-channel 
  [ratom channel]
  (async/go (reset! ratom (get-results (async/<! channel)))))

(defn update-data [data]
  (async/go
    (let [response (async/<! (async/map vector [(companies/get-companies) (technologies/get-technologies) (projects/get-projects)]))
          results (zipmap (keys @data) (map get-results response))]
      (reset! data results))))

(defn fs-date->js-date
  [fs-date]
  (js/Date. (+ (* (. fs-date -seconds) 1000) (* (. fs-date -nanoseconds) 1000000))))

(defn date-duration
  [from to]
  [:span
   [formatted-date/component (fs-date->js-date from)]
   [:span {:class "separator"} " -> "]
   [formatted-date/component (fs-date->js-date to)]])

(defn company 
  [{:keys [name duration role description references]}] 
  [:dl {:class "debug"}
   [:dt "name"] [:dd name]
   [:dt "duration"] [:dd [date-duration (duration :from) (duration :to)]]
   [:dt "role"] [:dd role]
   [:dt "description"] [:dd description]])

(defn view
  [{:keys [companies technologies projects]}]
  (println "companies: " companies)
  [:div
   [:h2 "companies"]
   (into [:div] (map (fn [args] [company args]) companies))])

(defn component
  []
  (let
   [data (reagent/atom {:companies [] :technologies [] :projects []})]
    (update-data data)
    (fn [] [view @data])))








