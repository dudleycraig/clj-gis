(ns gis.core
  (:require 
    ["babel-polyfill"]
    [gis.system :as system]))

(defn before-load
  "shadow-cljs hook before browser reload"
  []
  (js/console.clear))

(defn after-load 
  "shadow-cljs hook after browser reload"
  []
  (system/go))

(defn init []  
  (after-load))
