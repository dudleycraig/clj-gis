(ns utilities.form
  (:require [utilities.regex :as regex]))

(def rules {:word {:is-valid (fn [value] (re-matches (regex/validation :word) value))
                   :message {:id "word"
                             :date (js/Date.)
                             :status "error"
                             :text "Field requires 3 to 32 alphabetic characters."}}

            :words {:is-valid (fn [value] (re-matches (regex/validation :words) value)) 
                   :message {:id "word"
                             :date (js/Date.)
                             :status "error"
                             :text "Field requires 3 to 32 alphabetic characters, incl space."}}

            :paragraph {:is-valid (fn [value] (re-matches (regex/validation :paragraph) value)) 
                   :message {:id "paragraph"
                             :date (js/Date.)
                             :status "error"
                             :text "Field requires 3 to 256 alpha-numeric characters, incl space and punctuation."}}

            :email {:is-valid (fn [value] (re-matches (regex/validation :email) value))  
                    :message {:id "email"
                              :date (js/Date.)
                              :status "error"
                              :text "Field requires a valid email address."}}

            :nope {:is-valid (fn [value] (not (re-matches (regex/validation :nope) value))) ;; words I don't want
                   :message {:id "nope"
                             :date (js/Date.)
                             :status "error"
                             :text " ... nope."}}

            :required {:is-valid (fn [value] (> (count value) 0))
                       :message {:id "required"
                                 :date (js/Date.)
                                 :status "error"
                                 :text "Field is Required."}}})

(defn has-field-errors
  "search in field {:field-name {:messages {:message-id {:id \"message-id\" :status \"status\"} ...} ...} ...}
  for message status \"error\"
  returning truthy"
  [{:keys [messages]}]
  (if
   (> (count messages) 0) 
    (some
     (fn [[_ message]]
       (= (message :status) "error"))
     messages)))

(defn has-form-errors
  "search in fields {:field-name {:messages {:message-id {:status \"status\" ...}} ...}}
  for message status \"error\"
  returning truthy"
  [fields]
  (some 
    (fn 
      [[_ field]] 
      (has-field-errors field)) 
    fields))

(defn set-field-data
  "update fields {:field-name {:name \"field-name\" :value \"current-field-value\" ...}}
  from data {:field-name \"updated-field-value\" ...}
  returning {:field-name {:name \"field-name\" :value \"updated-field-value\" ...}}"
  [fields data]
  (reduce 
    (fn 
      [accumulator [field-key field-value]] 
      (assoc-in accumulator [(keyword field-key) :value] field-value)) 
    fields 
    data))

(defn get-field-data
  "get in fields {:field-name {:name \"field-name\" :value \"field-value\" ...} ...}
  returning {:field-name \"field-value\" ...}"
  [fields]
  (reduce
   (fn
     [data [_ {:keys [name value]}]]
     (assoc data (keyword name) value))
   {}
   fields))

(defn validate-rule
  "test from rule {:is-valid (fn [\"field-value\"] (test \"field-value\")) :message {:id \"rule-id\" :date [js/Date] ...} ...}
  on value \"field-value\"
  adding to accumulator messages {:rule-id {:id \"rule-id\" :date [js/Date] ...} ...}
  returning accumulator messages {:rule-id {:id \"rule-id\" :date [js/Date] 
                                  :rule-id {:id \"rule-id\" :date [js/Date] ...} ...}}"
  [{:keys [is-valid message]} value messages]
  (if-not 
    (is-valid value)
    (assoc messages (keyword (message :id)) (merge message {:date (js/Date.)}))
    messages))

(defn validate-field
  "test from rules {:rule-id {:is-valid (fn [\"field-value\"] (test \"field-value\")) :message {:id \"rule-id\" :date [js/Date] ...} ...}}
  on value \"field-value\"
  adding to accumulator messages {:rule-id {:id \"rule-id\" :date [js/Date] ...} ...}
  returning accumulator messages {:rule-id {:id \"rule-id\" :date [js/Date] 
                                  :rule-id {:id \"rule-id\" :date [js/Date] ...} ...}}"
  ([field value]
   (reduce 
     (fn [messages rule] (validate-rule rule value messages)) 
     {}
     (field :rules)))

  ([field value event]
   (reduce 
     (fn [messages rule]
       (if 
         (some (fn [rule-event] (= rule-event event)) (field :events))
         (validate-rule rule value messages)
         messages)) 
     {} 
     (field :rules))))

(defn validate-form 
  "test all fields
  {:field-name 
   {:name \"field-name\" 
    :value \"field-value\" 
    :rules {:rule-id {:is-valid (fn [\"field-value\"] (test \"field-value\")) :message {:id \"rule-id\" ...} ...} ...}
    :messages {} 
    ...}
  ...}
  returning fields with updated field messages"
  [fields]
  (reduce 
    (fn
      [accumulator [_ field]] 
      (let [messages (validate-field field (field :value))
            status (if (has-field-errors {:messages messages}) "error" "inert")]
        (assoc 
          accumulator 
          (keyword (field :name)) 
          (merge field {:messages messages :status status}))))
    {}
    fields))

(defn get-field-for-event
  "set and validate field {:name \"field-name\" :value \"field-value\" :messages {} :status \"field-status\" ...}
  from event js/Event
  returning updated field"
  [field event]
  (let [value (-> event .-target .-value)
        event-type (-> event .-type)
        messages (validate-field field value event-type)
        status (if (has-field-errors {:messages messages}) "error" "inert")]
    (merge field {:value value :messages messages :status status})))









