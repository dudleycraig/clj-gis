(ns gis.router
  "Application routing"
  (:require [reagent.core :as reagent-core]
            [reitit.core :as reitit-core]
            [reitit.frontend :as reitit-frontend]
            [reitit.frontend.easy :as reitit-frontend-easy]
            [gis.components.page-load :as page-load]
            [gis.components.home :as home]
            [gis.components.about :as about]
            [gis.components.portfolio :as portfolio]
            [gis.components.contact :as contact]
            [gis.components.resume :as resume]))

(def url (js/URL. (-> js/window .-location .-href)))
(def router (reitit-frontend/router
             ["/"
              [""          {:name ::home :handler home/component}]
              ["about"     {:name ::about :handler about/component}]
              ["portfolio" {:name ::portfolio :handler portfolio/component}]
              ["contact"   {:name ::contact :handler contact/component}]
              ["resume"    {:name ::resume :handler resume/component}]]))

(defonce current-route (reagent-core/atom (reitit-core/match-by-path router (-> url .-pathname))))

(defn component
  "render route as component"
  []
  (if @current-route
    (let [handler (:handler (:data @current-route))] [handler])
    [page-load/component]))

(defn handler
  "handler for router"
  []
  (reitit-frontend-easy/start!
   router
   (fn [new-route]
     (reset! current-route new-route))
   {:use-fragment false}))

(comment
  (in-ns 'gis.router)
  (reitit-frontend/match-by-path router "/resume"))

