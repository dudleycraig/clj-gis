(ns gis.pages.contact
  (:require [gis.components.contact :as contact]))

(defn page
  [firebase]
  (let [state {}]
    [contact/component state]))

