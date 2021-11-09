(ns gis.events
  (:require [re-frame.core :as re-frame]
            [gis.db :as db]
            [utilities.form :as form]))

(re-frame/reg-event-db 
 ::initialize-contact-db 
 (fn 
   [] 
   db/contact))

(re-frame/reg-event-db
 ::update-field-by-event
 (fn
   [db [_ event]]
   (let 
    [field-key (-> event .-target .-name) 
     field (get-in db [:fields (keyword field-key)])]
     (println (str "update-field-by-event value: " (-> event .-target .-value)))
     (println (str "update-field-by-event field: " field))
     (assoc-in 
      db 
      [:fields (keyword field-key)] 
      (merge field (form/update-field-by-event field event))))))



