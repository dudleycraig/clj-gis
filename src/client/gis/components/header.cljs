(ns gis.components.header
  (:require [goog.object :as gobj]
            [reagent.core :as rc]
            ["react-bootstrap" :as bs]
            ["@fortawesome/react-fontawesome" :as fa]
            ["@fortawesome/free-solid-svg-icons" :refer [faEnvelope faImages faHome faUser]]))

(defn fa-icon [{icon :icon size :size} & props]
  [:> (gobj/get fa "FontAwesomeIcon") (merge {:icon icon :size size} props)])

(defn nav-item [attributes & children]
  [:> (gobj/get (gobj/get bs "Nav") "Item") attributes children])

(defn nav-link [attributes & children]
  [:> (gobj/get (gobj/get bs "Nav") "Link") attributes children])

(defn navbar-brand [attributes & children]
  [:> (gobj/get (gobj/get bs "Navbar") "Brand") attributes children])

(defn navbar-toggle [attributes & children]
  [:> (gobj/get (gobj/get bs "Navbar") "Toggle") attributes children])

(defn navbar-collapse [attributes & children]
  [:> (gobj/get (gobj/get bs "Navbar") "Collapse") attributes children])

(defn root-nav-link [{title :title link :link icon :icon size :size}]
  [nav-link {:key (str "main-navigation-" title) 
             :href link} 
   [fa-icon {:icon icon 
             :size size 
             :key (str "main-navigation-" title "-icon")}] 
   [:span {:class "ml-1 d-md-inline d-none" 
           :key (str "main-navigation-" title "-icon-span")} 
    (clojure.string/capitalize title)]])

(defn component []
  [:<>
   [:header {:id "main-header" :class "bs-component text-center"}
    [:> (gobj/get bs "Navbar") {:id "main-navigation" 
                                :expand "lg" 
                                :class "navbar-dark bg-primary display-flex justify-content-center"
                                :variant "dark"
                                :fixed "top"
                                :collapseOnSelect true}
     [navbar-brand {:href "/" 
                    :key "main-navigation-brand"
                    :class "mr-0 ml-md-auto ml-0"} 
      [:b {:key "main-navigation-brand-b"} "𝑓"] "unctional.org.za"]
     [:> (gobj/get bs "Nav") {:key "main-navigation-nav" :class "justify-content-left flex-row ml-0 mr-md-auto mr-0"}
      [root-nav-link {:title "home" :link "/" :icon faHome :size "1x"}]
      [root-nav-link {:title "portfolio" :link "/portfolio" :icon faImages :size "1x"}]
      [root-nav-link {:title "contact" :link "/contact" :icon faEnvelope :size "1x"}]
      [root-nav-link {:title "resume" :link "/resume" :icon faUser :size "1x"}]]]]])

