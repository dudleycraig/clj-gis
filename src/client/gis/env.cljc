(ns gis.env
  #?(:cljs (:require-macros [gis.env :as env])))
                       
(def config
  "Map of environment variables, to be read at runtime."
  #?(:cljs (env/get-config-map)
     :clj {}))

#?(:clj
   (defmacro ^:private get-config-map
     "Returns config map at compile time"
     []
     config))
