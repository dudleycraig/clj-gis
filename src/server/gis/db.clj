(ns gis.db
  (:require [clojure.data.json :as json]
            [next.jdbc :as jdbc]))

(defn query
  "generic postgis query"
  [data-source query]
  (with-open [connection (jdbc/get-connection data-source)]
    (jdbc/execute! connection query)))

(defn get-weather-stations-in-country
  "get weather stations in south africa"
  [data-source]
  (query data-source [(str "SELECT stations.* "
                       "FROM zaf_weather_stations AS stations ")]))

(defn get-weather-stations-in-province
  "get weather stations in south african provinces"
  [data-source province]
  (query data-source [(str "SELECT stations.* "
                       "FROM zaf_weather_stations AS stations "
                       "JOIN zaf_boundaries_level_1 AS province "
                       "ON province.name_1 = '" province "' "
                       "AND ST_WITHIN(stations.geom, province.geom)")]))

(defn get-weather-stations-in-district
  "get weather stations in south african districts"
  [data-source]
  (query data-source ["SELECT * FROM zaf_weather_stations"]))

(defn get-weather-stations-in-ward
  "get weather stations in south african wards"
  [data-source]
  (query data-source ["SELECT * FROM zaf_weather_stations"]))


