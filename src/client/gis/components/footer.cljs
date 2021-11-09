(ns gis.components.footer
  (:require [goog.object :as gobj]
            ["@fortawesome/react-fontawesome" :as react-fontawesome]
            ["@fortawesome/free-brands-svg-icons" :refer [faGithubSquare]]
            ["@fortawesome/free-solid-svg-icons" :refer [faEnvelopeSquare]]))

(defn fa-icon [{icon :icon size :size} & props]
  [:> (gobj/get react-fontawesome "FontAwesomeIcon") (merge {:icon icon :size size} props)])

(defn component
  "application footer"
  []
  [:footer {:class "navbar navbar-expand-lg fixed-bottom navbar-dark bg-primary"}
   [:div {:class "navbar-nav d-none d-md-inline"} "© 2018 Dudley Craig"]
   [:div {:class "nav mx-auto ml-md-auto mr-md-0"}
    [:a {:class "hint--top p-1" :data-hint "GitHub" :href "https://github.com/dudleycraig/functional"}
     [fa-icon {:icon faGithubSquare :size "2x"}]]
    [:a {:class "hint--top p-1" :data-hint "Email" :href "mailto:dudleycraig@gmail.com"}
     [fa-icon {:icon faEnvelopeSquare :size "2x"}]]]])
