(ns gis.firebase
  (:require ["firebase/app" :as firebase]
            ["firebase/firestore" :refer [getFirestore]]))

(defn handler
  [config]
  (try ;; TODO: only if App named [DEFAULT] doesn't exist 
    (firebase/initializeApp config)
    (catch js/Object e (.error js/console (str "Failed initializing firebase: " e)))))

