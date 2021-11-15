(ns gis.components.formatted-date)

(defn component 
  [date]
  [:span {:class "date"}
   [:span {:class "day"} (take-last 2 (str "0" (.getDate date)))]
   [:span {:class "separator"} "-"]
   [:span {:class "month"} (take-last 2 (str "0" (+ (.getMonth date) 1)))]
   [:span {:class "separator"} "-"]
   [:span {:class "year"} (.getFullYear date)]])

