(ns gis.core
  "main application entry point."
  (:require [gis.system :as system]))

(defn -main
  "run application"
  [& args]
  (system/go))

(comment 
  (in-ns 'gis.core)
  (-main))


