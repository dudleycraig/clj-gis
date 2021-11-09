(ns gis.components.scene
  (:require [reagent.core :as rc]
            ["three" :as THREE]
            ["@react-three/fiber" :refer [useFrame useThree]]
            ["@react-three/drei" :refer [useGLTF]]
            ["react" :as react :refer [Suspense useEffect useRef]]
            [gis.components.camera-controls :as camera-controls]
            [gis.components.spinner :as spinner]))

(defn capetown 
  "capetown gltf"
  [] 
  (let [gltf (useGLTF "./gltf/capetown.glb")
        geometry (.. gltf -nodes -EXPORT_GOOGLE_SAT_WM -geometry)
        texture (.. gltf -nodes -EXPORT_GOOGLE_SAT_WM -material -map)]
    [:mesh {:dispose nil
            :geometry geometry}
     [:meshPhongMaterial {:attach "material"
                          :depthTest true
                          :depthWrite true
                          :side (. THREE -FrontSize)
                          :color 0xFFFFFF
                          :reflectivity 0
                          :flatShading false
                          :roughness 1 
                          :metalness 0
                          :emissive 0x101010
                          :specular 0x101010
                          :shininess 0
                          :map texture}]]))

(defn component 
  "scene lighting and object loading"
  []
  (let [canvas (useThree)
        camera (. canvas -camera)
        torchref (useRef)
        groupref (useRef)]
    (useFrame #(if (. torchref -current)
                 (do (set! ^js (.. torchref -current -position -x) (.. camera -position -x))
                     (set! ^js (.. torchref -current -position -y) (.. camera -position -y))
                     (set! ^js (.. torchref -current -position -z) (.. camera -position -z)))))
    [:<>
     [:f> camera-controls/component]
     [:spotLight {:position [0 400 0]
                  :lookAt [0 0 0]
                  :color 0xCCCCCC
                  :intensity 1
                  :penumbra 0.5}]
     [:spotLight {:lookAt [0 0 0]
                  :color 0xCCAAAA
                  :intensity 2
                  :penumbra 0
                  :ref torchref}]
     [:> Suspense {:fallback spinner/component}
      [:group {:ref groupref}
       [:f> capetown]]]]))

