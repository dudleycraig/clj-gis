(ns gis.subs
  (:require [re-frame.core :as re-frame]
            [gis.db :as db]
            [utilities.form :as form]))

(re-frame/reg-sub
  ::get-field-by-key
  (fn 
   [db [_ field-key]] 
   (get-in db [:fields field-key])))

(re-frame/reg-sub
 ::get-field-value-by-key
 (fn
   [db [_ field-key]]
   (get-in db [:fields field-key :value])))

(re-frame/reg-sub
 ::get-field-messages-by-key
 (fn
   [db [_ field-key]]
   (get-in db [:fields field-key :messages])))

(re-frame/reg-sub
 ::get-field-status-by-key
 (fn
   [db [_ field-key]]
   (get-in db [:fields field-key :status])))
