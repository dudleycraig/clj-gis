(ns gis-server.core-test
  (:require [clojure.test :refer [deftest testing is]]
            [gis-server.core :refer [to-list-coords]]))

(def vector-of-maps [{:lon -81.52 :lat 41.6} {:lon -81.49 :lat 41.61}])

(deftest test-to-list-coords
  (testing "coord maps to list coords"
    (is (= '([-81.52 41.6] [-81.49 41.61]) (to-list-coords vector-of-maps)))))


