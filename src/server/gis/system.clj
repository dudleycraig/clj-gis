(ns gis.system
  "System state management"
  (:require [cprop.source :as cprop-source]
            [integrant.core :as integrant]
            [next.jdbc :as jdbc]
            [ring.adapter.jetty :as jetty]
            [gis.router :refer [router]]))

(defn populate-integrant-configuration 
  "populate integrant configuration from system properties"
  [props] 
  {::http     {:options (merge {:join? false} (get-in props [:gis :http]))
               :handler (integrant/ref ::router)}
   ::router   {:data-source (integrant/ref ::db)}
   ::db       {:options (get-in props [:gis :db])}})

(defmethod integrant/init-key ::http [_ {:keys [options handler]}]
  (let [handler (atom (delay handler))]
    {:handler handler
     :http (jetty/run-jetty (fn [request] (@@handler request)) options)}))

(defmethod integrant/halt-key! ::http [_ {:keys [http]}]
  (.stop http))

(defmethod integrant/suspend-key! ::http [_ {:keys [handler]}]
  (reset! handler (promise)))

(defmethod integrant/resume-key ::http [key {options :options handler :handler} {old-options :options old-handler :handler} old-instance]
  (if (= handler old-handler)
    (do (deliver @(:handler old-instance) handler)
        old-instance)
    (do (integrant/halt-key! key old-instance)
        (integrant/init-key key options))))

(defmethod integrant/init-key ::router [_ {:keys [data-source]}]
  (router data-source))

(defmethod integrant/init-key ::db [_ {{protocol :protocol adapter :adapter domain :domain port :port name :name user :user password :password} :options}]
  (let [url (str protocol ":" adapter "://" domain ":" port "/" name "?user=" user "&password=" password)
        alt-url "jdbc:postgresql://localhost:5432/fgis?user=postgres&password=password"
        data-source (jdbc/get-datasource alt-url)]
    data-source))

(defn go
  "Start system"
  ([]
   (go (cprop-source/from-props-file "resources/gis/system.properties")))
  ([props]
   (def system (integrant/init (populate-integrant-configuration props)))
   system))

(defn halt
  "Stop system"
  [system]
  (integrant/halt! system))

(defn reset 
  "Restart system"
  [system props]
  (halt system)
  (go (cprop-source/from-props-file "resources/gis/system.properties")))

(defn suspend
  "Suspend system"
  [system]
  (integrant/suspend! system))

(defn resume
  "Resume system"
  [system]
  (integrant/resume system))

(comment
  (in-ns 'gis.system)
  (def system (go (cprop-source/from-props-file "resources/gis/system.properties")))
  (reset system (cprop-source/from-props-file "resources/gis/system.properties"))
  (halt system)
  (suspend system)

  ;; TODO: identify what arguments and "old" arguments refer to
  (resume system))

;; experimentation with non-blocking, stateful components
;; 
;; (def state (agent 0))
;;
;; (def config
;;   {::requires-component {:options {}
;;                          :component (integrant/ref ::component)}
;;    ::component {:state state}})
;; 
;; (defn async-component 
;;   "non-blocking, asynchronous, iteration for stateful component experimentation and testing"
;;   [state]
;;   (let [limit 5]
;;     (loop [accumulator @state]
;;       (print (str @(send state inc) (if (= accumulator limit) "." ", ")))
;;       (Thread/sleep 1000)
;;       (if (= accumulator limit)
;;         (do (println "") state)
;;         (recur (inc accumulator))))))
;; 
;; (defmethod integrant/init-key ::component [_ {:keys [state]}]
;;   (println (str "Started component"))
;;   (.start (Thread. #(async-component state))))

