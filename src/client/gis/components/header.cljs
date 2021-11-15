(ns gis.components.header
  (:require [goog.object :as gobj]
            [reagent.core :as rc]
            ;; TODO: drop react-bootstrap like it's been stolen
            ["react-bootstrap" :as bs :refer [Nav Navbar]]
            ["@fortawesome/react-fontawesome" :refer [FontAwesomeIcon]]
            ["@fortawesome/free-solid-svg-icons" :refer [faEnvelope faImages faHome faUser]]))

(defn icon-link
  [{title :title link :link icon :icon size :size}]
  [:> (. Nav -Link) {:href link}
   [:> FontAwesomeIcon {:icon icon :size size}]
   [:span {:class "ml-1 d-md-inline d-none"} (clojure.string/capitalize title)]])

(defn component
  []
  [:header
   {:id "main-header"
    :class "bs-component text-center"}
   [:> Navbar
    {:id "main-navigation"
     :expand "lg"
     :class "navbar-dark bg-primary display-flex justify-content-center"
     :variant "dark"
     :fixed "top"
     :collapseOnSelect true}
    [:> (. Navbar -Brand)
     {:href "/"
      :class "mr-0 ml-md-auto ml-0"}
     [:b "𝑓"] "unctional.org.za"]
    [:> Nav {:class "justify-content-left flex-row ml-0 mr-md-auto mr-0"}
     [icon-link {:title "home" :link "/" :icon faHome :size "1x"}]
     [icon-link {:title "portfolio" :link "/portfolio" :icon faImages :size "1x"}]
     [icon-link {:title "contact" :link "/contact" :icon faEnvelope :size "1x"}]
     [icon-link {:title "resume" :link "/resume" :icon faUser :size "1x"}]]]])

