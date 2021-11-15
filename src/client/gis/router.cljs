(ns gis.router
  "Application routing"
  (:require [reagent.core :as reagent-core]
            [reitit.core :as reitit-core]
            [reitit.frontend :as reitit-frontend]
            [reitit.frontend.easy :as reitit-frontend-easy]
            [gis.components.page-load :as page-load]))

(defonce current-route (reagent-core/atom nil))

(defn component
  "render route as component"
  [firebase]
  (if @current-route
    (let [handler (:handler (:data @current-route))] [handler firebase])
    [page-load/component]))

(defn handler
  "handler for router"
  [config _]
  (let [router (reitit-frontend/router config)
        url (js/URL. (-> js/window .-location .-href))
        init-route (reitit-core/match-by-path router (-> url .-pathname))]
    (reitit-frontend-easy/start!
     router
     (fn [new-route] (reset! current-route new-route))
     {:use-fragment false})))

(comment
  (in-ns 'gis.router)
  (reitit-frontend/match-by-path router "/resume"))

