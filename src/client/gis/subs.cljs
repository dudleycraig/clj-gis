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
  ::get-field-property-by-key 
  (fn 
    [db [_ field-key property-key]] 
    (get-in db [:fields field-key property-key])))

(re-frame/reg-sub 
  ::get-form-property-by-key
  (fn 
    [db [_ property-key]] 
    (db property-key)))

