(ns gis.components.formatted-time)

(defn component 
  [date]
  [:span {:class "time"}
   [:span {:class "hours"} (take-last 2 (str "0" (.getHours date)))]
   [:span {:class "separator"} ":"]
   [:span {:class "minutes"} (take-last 2 (str "0" (.getMinutes date)))]
   [:span {:class "separator"} ":"]
   [:span {:class "seconds"} (take-last 2 (str "0" (.getSeconds date)))]
   [:span {:class "separator"} "."]
   [:span {:class "milliseconds"} (take-last 3 (str "00" (.getMilliseconds date)))]])
