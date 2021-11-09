(ns gis.system
  "System state management"
  (:require [integrant.core :as integrant-core]
            [gis.router :as router]
            [gis.app :as app]))

(defonce system (atom nil))

(def confintegrant-core {::app    {:handler app/handler
                                   :mount-id "root"
                                   :router (integrant-core/ref ::router)}
                         ::router {:handler router/handler}})

(defmethod integrant-core/init-key ::app [_ {:keys [handler mount-id router]}]
  (handler mount-id router))

(defmethod integrant-core/halt-key! ::app [_ {:keys [app]}]
  (.stop app))

(defmethod integrant-core/init-key ::router [_ {:keys [handler]}]
  (handler))

(defn go
  "Start system"
  []
  (reset! system (integrant-core/init confintegrant-core)))

(defn halt!
  "Stop system"
  []
  (when @system
    (integrant-core/halt! @system)
    (reset! system nil)))

