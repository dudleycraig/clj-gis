(ns gis.components.home
  (:require [gis.components.geo-context.core :as geo-context]))

(defn component
  "/home"

  ([] (fn [] [geo-context/component]))

  ([data] (fn [] [geo-context/component data])))
