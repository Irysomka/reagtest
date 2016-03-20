(ns reagtest.db
  (:require [reagent.core :as r :refer [atom]]))

(def app-state
  (r/atom
    {:users
      [{:id 1 :first "Spock" :last "Bismarck" :birthdate "03.08.2015" :email "spock@example.com"}]}))
