(ns gis.components.canvas
  (:require [reagent.core :as rc]
            ["@react-three/fiber" :refer [Canvas useFrame useThree extend]]
            [gis.components.scene :as scene]))

(def canvas (rc/adapt-react-class Canvas))

(defn component
  "initialize webgl animation"
  []
  [canvas {:id "map-canvas"
           :gl {:alpha true}
           ;; :onCreated (fn [canvas] (if (. canvas -scene)
           ;;                            (set! ^js (. (. canvas -scene) -translateY) 50)))
           :camera {:fov 30 
                    :aspect 0.2 
                    :near 1 
                    :far 50000000
                    :position [40000 0 0]
                    :zoom 2}
           :style {:position "absolute"
                   :width "100vw"
                   :height "100vh"
                   :left "0px"
                   :top "0px"
                   :z-index 20
                   :background "#888888"}
           :concurrent true
           :pixelRatio (. js/window -devicePixelRatio)}
   [:f> scene/component]])
