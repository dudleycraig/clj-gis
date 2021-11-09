(ns gis.components.spinner
  (:require [reagent.core :as rc]
            ["@react-three/fiber" :refer [useFrame]]
            ["three" :as THREE]
            ["react" :refer [useRef]]))

(defn component 
  "3d page load animation"
  []
  (let [groupref (useRef)
        radius 16
        divisions 9 
        radians (. (. THREE -MathUtils) degToRad (/ 360 8))]
    (useFrame #(if (. groupref -current) ( set! ^js (.. groupref -current -rotation -z) (+ (.. groupref -current -rotation -z) 0.061))))
    [:group {:ref groupref}
     (map (fn [index] (let [x (* radius (. js/Math cos (* radians index)))
                            y (* radius (. js/Math sin (* radians index)))]
                        (if (not= index 1)
                          [:mesh {:key (str "ball-" index)
                                  :visible true
                                  :position [x y 0]
                                  :rotation [0 0 0]}
                           [:sphereGeometry {:attach "geometry" :args [5 20 20]}]
                           [:meshPhongMaterial {:attach "material"
                                                :depthTest true
                                                :depthWrite true
                                                :side (. THREE -FrontSide)
                                                :color 0xff7700
                                                :reflectivity 0
                                                :flatShading false
                                                :roughness 0.8
                                                :metalness 0.2
                                                :emissive 0x101010
                                                :specular 0x101010
                                                :shininess 100}]])))
          (range 1 divisions))]))
