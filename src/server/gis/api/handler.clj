(ns gis.api.handler
  (:require [next.jdbc :as jdbc]
            [gis.db :as db]))

(defn handler
  "/api gql handler"
  [data-source]
  (fn [request]
    (let [result (db/get-weather-stations-in-province data-source "Western Cape")]
      {:name ::api
       :status 200
       :headers {"Content-Type" "text/html; charset=utf-8"}
       :body (str "result: " result)})))

(comment
  (in-ns 'gis.api.handler)
  (query-stations (jdbc/get-datasource "jdbc:postgresql://localhost:5432/fgis?user=postgres&password=password")))
