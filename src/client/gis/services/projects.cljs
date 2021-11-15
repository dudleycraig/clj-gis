(ns gis.services.projects
  (:require [reagent.core :as reagent]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.core.async :as async]
            ["firebase/auth"]
            ["firebase/firestore" :refer [collection getDocs getFirestore]]))

(defn get-projects
  []
  (try
    (async/go
      (<p! (getDocs (collection (getFirestore) "projects"))))
    (catch js/Object error (.error js/console "Failed retrieving projects, " error))))
