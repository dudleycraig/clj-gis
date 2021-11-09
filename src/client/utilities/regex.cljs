(ns utilities.regex)

(def validation {:word #"^[a-zA-Z_-]{3,32}$"  ;; alphabetic, underscore, and dash, ... no space
                 :words #"^[a-zA-Z _-]{3,32}$" ;; alphabetic, underscore, and dash, incl space
                 :paragraph #"(?m)^([a-zA-Z0-9 .,'\"!$\?\(\)_-]{3,32})$" ;; multi-line, alpha-numeric, space, and punctuation
                 :email #"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" ;; iso email address
                 :nope #"(?i)^(boss|god|lord)$"}) 
