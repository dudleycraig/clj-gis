(ns gis.components.app
  (:require [goog.object :as goog-object]
            [reagent.core :as reagent-core]
            ["react-bootstrap" :as react-bootstrap]
            ["@fortawesome/react-fontawesome" :as react-fontawesome]
            ["@fortawesome/free-solid-svg-icons" :refer [faEnvelope faImages faHome faUser]]
            [gis.components.header :as header]
            [gis.router :as router]
            [gis.components.canvas :as canvas]
            [gis.components.footer :as footer]))

;; [:f> canvas/component]

(defn component
  "stage view"
  [firebase]
  [:<>
   [header/component]
   [:div {:class "container text-center" :style {:min-height "100vh"}}
    [:div {:class "row"}
     [:div {:class "col-xl-10 col-12 col" :style {:margin-top "70px"}}
     [router/component firebase]]]]
   [footer/component]])
