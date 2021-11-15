(ns gis.app
  (:require [reagent.dom :as reagent-dom]
            [gis.components.app :as root]
            [gis.router :as router]
            [gis.components.app :as app]))

(defn handler
  [{:keys [mount-id]} firebase]
  (reagent-dom/render [app/component firebase] (. js/document getElementById mount-id)))

(comment
  (in-ns 'gis.app))
