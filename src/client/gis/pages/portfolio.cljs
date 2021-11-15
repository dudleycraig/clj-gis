(ns gis.pages.portfolio
  (:require [reagent.core :as reagent]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.core.async :as async]
            [gis.services.companies :as companies]
            [gis.components.portfolio :as portfolio]
            ["firebase/auth"]
            ["firebase/firestore" :refer [collection getDocs getFirestore]]))

(defn page
  [firebase]
  [portfolio/component])

