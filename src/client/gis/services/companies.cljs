(ns gis.services.companies
  (:require [reagent.core :as reagent]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.core.async :as async]
            ["firebase/auth"]
            ["firebase/firestore" :refer [collection getDocs getFirestore]]))

(defn get-companies
  []
  (try
    (async/go
      (<p! (getDocs (collection (getFirestore) "companies"))))
    (catch js/Object error (.error js/console "Failed retrieving companies, " error))))
