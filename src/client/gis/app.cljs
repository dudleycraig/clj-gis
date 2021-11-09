(ns gis.app
  (:require [reagent.dom :as reagent-dom]
            [gis.components.app :as root]
            [gis.router :as router]
            [gis.components.app :as app]))

(defn handler
  "application handler"
  [mount-id router]
  (reagent-dom/render [app/component] (. js/document getElementById mount-id)))

(comment
  (in-ns 'gis.app))
