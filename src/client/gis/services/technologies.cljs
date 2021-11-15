(ns gis.services.technologies
  (:require [reagent.core :as reagent]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.core.async :as async]
            ["firebase/auth"]
            ["firebase/firestore" :refer [collection getDocs getFirestore]]))

(defn get-technologies
  []
  (try
    (async/go
      (<p! (getDocs (collection (getFirestore) "technologies"))))
    (catch js/Object error (.error js/console "Failed retrieving technologies, " error))))
