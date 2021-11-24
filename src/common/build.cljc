(ns build 
  (:require 
    [cprop.source :as cprop]
    [gis.env :as env]
    [shadow.cljs.devtools.config :as shadow-config]
    [shadow.cljs.devtools.api :as shadow]))

(defn release
  "Build :browser release, with advanced compilation"
  ([] (release "local"))
  ([release-flag]
   (shadow/release* 
     (-> (shadow-config/get-build! :browser)
         (assoc ::release-flag release-flag)) ;; note, we add ::release-flag to our build-config, we need this later.
     {})))

(defn watch
  "Watch the :browser release, reloading on changes."
  {:shadow/requires-server true}
  ([] (watch "local"))
  ([release-flag]
   (shadow/watch (-> (shadow-config/get-build! :browser)
                     (assoc ::release-flag release-flag)))))

(defn read-env [release-flag]
  (-> (cprop/from-props-file "resources/gis/system.properties")
      (assoc :release-flag release-flag)))

(defn load-env
  {:shadow.build/stages #{:compile-prepare}}
  [{:as build-state
    :keys [shadow.build/config]}]
  (let [app-env (read-env (-> config ::release-flag keyword))]
    (alter-var-root #'env/config (constantly app-env))
    (-> build-state
        (assoc-in [:compiler-options :external-config ::env] app-env))))
