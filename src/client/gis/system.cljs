(ns gis.system
  "System state management"
  (:require [re-frame.core :as re-frame]
            [integrant.core :as integrant-core]
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

(def system-config
  {::app
   {:handler app/handler
    :config
    {:mount-id "root"}
    :resources
    {:router (integrant-core/ref ::router)
     :firebase (integrant-core/ref ::firebase)}}

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
    :config #js{"apiKey" "AIzaSyDegND1W5CPpHnlcT3f0AwICkJwI8QWQvY",
                "authDomain" "functional-256207.firebaseapp.com",
                "projectId" "functional-256207",
                "storageBucket" "functional-256207.appspot.com",
                "messagingSenderId" "996616380561",
                "appId" "1:996616380561:web:406750a7fa6668ac8e5f30",
                "measurementId" "G-S3RWRYJ7VL",
                "databaseURL" "https://functional-256207-default-rtdb.europe-west1.firebasedatabase.app"}}})

(defmethod integrant-core/init-key ::firebase 
  [_ {:keys [handler config]}]
  (handler config))

(defmethod integrant-core/init-key ::router 
  [_ {:keys [handler config resources]}]
  (handler config resources))

(defmethod integrant-core/init-key ::app 
  [_ {:keys [handler config resources]}]
  (handler config resources))

(defmethod integrant-core/halt-key! ::app 
  [_ {:keys [app]}]
  (.stop app))

(defn go
  "Start system"
  []
  (reset! system (integrant-core/init system-config)))

(defn halt!
  "Stop system"
  []
  (when @system
    (integrant-core/halt! @system)
    (reset! system nil)))

