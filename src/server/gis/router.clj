(ns gis.router
  "Application routing"
  (:require
   [reitit.ring :as ring]
   [gis.api.handler :as api-handler]))

(defn public-handler
  "/ http public folder"
  [_]
  (ring/create-file-handler {:root "public/"}))

(defn router
  "handler for jetty adapter"
  [data-source]
  (ring/ring-handler
   (ring/router [["/api" {:get {:handler (api-handler/handler data-source)}}]
                 ["/*" {:get {:handler (public-handler data-source)}}]]
                {:conflicts (constantly nil)})
   (ring/routes
    (ring/create-default-handler {:not-found (constantly {:status 404 :body "Not-Found"})}))))

(comment
  (in-ns 'gis/router))
















