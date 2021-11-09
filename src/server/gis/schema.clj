(ns gis.schema
  (:require [clojure.java.io :as io]
            [com.walmartlabs.lacinia.util :as util]
            [com.walmartlabs.lacinia.schema :as schema]
            [clojure.edn :as edn]
            [gis.datasources.afrigis-api :as afrigis-api]))

(defn resolve-weather-by-coord 
  [context [coords location_buffer station_count] _value]
  (afrigis-api/weather-by-coord coords location_buffer station_count))

(defn load-schema
  []
  (-> (io/resource "weather_schema.edn")
      slurp 
      edn/read-string
      (util/attach-resolvers {:query/weather-by-coord resolve-weather-by-coord})
      schema/compile))

(comment
  (load-schema)
  (afrigis-api/weather-by-coord "-25.808589,28.255833" 10000 3)
  (spit "./scratch.txt" (afrigis-api/weather-by-bbox -35.0 -20.0 15.0 35.0)))


