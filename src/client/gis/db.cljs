(ns gis.db
  (:require [utilities.form :as form]))

(def contact
  {:status "inert"
   :messages {}
   :fields
   {:name
    {:name "name"
     :value ""
     :status "inert"
     :events ["change"]
     :messages {}
     :rules [(merge
              (form/rules :word)
              {:message (merge
                         (get-in form/rules [:word :message])
                         {:text "Name requires 3 to 32 alphabetic characters."})})
             (merge
               (form/rules :nope)
               {:message (merge
                           (get-in form/rules [:nope :message])
                           {:text " ... nope."})})]}
    :email
    {:name "email"
     :value ""
     :status "inert"
     :events ["change"]
     :messages {}
     :rules [(merge
              (form/rules :email)
              {:message (merge
                         (get-in form/rules [:required :message])
                         {:text "Email requires a valid address."})})]}
    :query
    {:name "query"
     :value ""
     :status "inert"
     :events ["change"]
     :messages {}
     :rules [(merge
              (form/rules :paragraph)
              {:message (merge
                         (get-in form/rules [:required :message])
                         {:text "Query requires 3 to 256 alpha-numeric characters, incl space and punctuation."})})]}}})

