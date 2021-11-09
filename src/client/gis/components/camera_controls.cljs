(ns gis.components.camera-controls
  (:require [reagent.core :as rc]
            ["@react-three/fiber" :refer [useFrame useThree]]
            ["@react-three/drei" :refer [OrbitControls]]
            ["three" :as THREE]
            ["react" :refer [useRef]]))

(def orbit-controls (rc/adapt-react-class OrbitControls))

(defn component 
  "orbit camera around scene with spotlight following camera"
  []
  (let [canvas (useThree)
        camera (. canvas -camera)
        domElement (.. canvas -gl -domElement)
        cameraref (useRef)]
    (useFrame #(if 
                 (. cameraref -current) 
                 (.. cameraref -current update)))
    (set! ^js (.. camera -rotation -x) (.. THREE -MathUtils (degToRad 180)))
    [orbit-controls {:ref cameraref :args [camera, domElement] :autoRotate false :enableZoom true}]))
