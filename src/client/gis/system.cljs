(ns gis.system
  "System state management"
  (:require 
    [re-frame.core :as re-frame]
    [integrant.core :as integrant]

    [gis.env :as env]
    [gis.firebase :as firebase]
    [gis.router :as router]
    [gis.app :as app]
    [gis.db :as db]

    [gis.components.home :as home]
    [gis.components.about :as about]
    [gis.pages.portfolio :as portfolio]
    [gis.pages.contact :as contact]
    [gis.components.resume :as resume]))

(defonce system (atom nil))

(def external-config (env/get-config-map))

(def system-config
  {::app
   {:handler app/handler
    :config
    {:mount-id "root"}
    :resources
    {:router (integrant/ref ::router)
     :firebase (integrant/ref ::firebase)}}

   ::router
   {:handler router/handler
    :config
    ["/"
     ["" {:name ::home :handler home/component}]
     ["about" {:name ::about :handler about/component}]
     ["portfolio" {:name ::portfolio :handler portfolio/page}]
     ["contact" {:name ::contact :handler contact/page}]
     ["resume" {:name ::resume :handler resume/component}]]
    :resources nil}

   ::firebase
   {:handler firebase/handler
    :config 
    #js{"apiKey" (get-in external-config [:db :firebase :api-key]),
        "authDomain" (get-in external-config [:db :firebase :auth-domain]),
        "projectId" (get-in external-config [:db :firebase :project-id]),
        "storageBucket" (get-in external-config [:db :firebase :storage-bucket]),
        "messagingSenderId" (get-in external-config [:db :firebase :messaging-sender-id]),
        "appId" (get-in external-config [:db :firebase :app-id]),
        "measurementId" (get-in external-config [:db :firebase :measurement-id]),
        "databaseURL" (get-in external-config [:db :firebase :database-url])}
    :resources {}}})

(defmethod integrant/init-key ::firebase 
  [_ {:keys [handler config]}]
  (handler config))

(defmethod integrant/init-key ::router 
  [_ {:keys [handler config resources]}]
  (handler config resources))

(defmethod integrant/init-key ::app 
  [_ {:keys [handler config resources]}]
  (handler config resources))

(defmethod integrant/halt-key! ::app 
  [_ {:keys [app]}]
  (.stop app))

(defn go
  "Start system"
  []
  (reset! system (integrant/init system-config)))

(defn halt!
  "Stop system"
  []
  (when @system
    (integrant/halt! @system)
    (reset! system nil)))

(comment)

