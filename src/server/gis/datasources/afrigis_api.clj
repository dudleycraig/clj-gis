(ns gis.datasources.afrigis-api
  "AfriGIS weather API"
  (:import (java.net URLEncoder)
           (java.nio.charset Charset)
           (javax.crypto Mac)
           (javax.crypto SecretKey)
           (javax.crypto.spec SecretKeySpec)
           (org.apache.commons.codec.binary Base64)))

;; TODO: move settings into secure configuration file
(def afrigis-baseurl "https://saas.afrigis.co.za/rest/2")
(def afrigis-key "93bc02c086")
(def afrigis-secret "7d4fd1b64266")
(def afrigis-trial true)

(defn hmac 
  "Generate BASE64 HMAC using afrigis message and secret"
  [^String message]
  (let [algorithm "HmacSHA1"
        signing-key (SecretKeySpec. (.getBytes afrigis-secret) algorithm)
        mac (doto (Mac/getInstance algorithm) (.init signing-key))
        raw-hmac (.doFinal mac (.getBytes message "ASCII"))
        b64-hmac (String. (Base64/encodeBase64 raw-hmac) "UTF-8")]
    (-> b64-hmac 
        (clojure.string/replace #"-" "+")
        (clojure.string/replace #"_" "/")
        (clojure.string/replace #"=" ""))))

(defn query
  [query service]
  (let [timestamp (int (/ (.getTime (java.util.Date.)) 1000))
        message (str query "/" service "/" afrigis-key "/" timestamp)
        auth (if afrigis-trial "trial" (hmac message))
        request (str afrigis-baseurl "/" service "/" afrigis-key "/" auth "/" timestamp "/?" query)]
    (print request)
    (slurp request)))

(defn weather-by-coord
  [coords location_buffer station_count]
  "Get weather for co-ordinates."
  (query (str "location=" (URLEncoder/encode coords "UTF-8") "&location_buffer=" location_buffer "&station_count=" station_count) "weather.measurements.getByCoord"))

(defn weather-by-bbox
  [bottom_latitude top_latitude left_longitude right_longitude]
  (query (str "bottom_latitude=" bottom_latitude "&top_latitude=" top_latitude "&left_longitude=" left_longitude "&right_longitude=" right_longitude) "weather.measurements.getByBBox"))



