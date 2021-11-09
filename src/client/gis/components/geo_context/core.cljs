(ns gis.components.geo-context.core
  (:require [re-frame.core :refer [reg-event-db]]))

(reg-event-db
  :enable-feature-toggle
  (fn [db [_ _]]
    (assoc-in db [:global :enable-feature-toggle] true)))

(defn component
  "geo-context core component"
  []
  [:h1 "geo-context diorama"])
