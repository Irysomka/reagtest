(ns reagtest.users
  (:require [reagtest.db :as db]))

(defn user [{:keys [id first last]}]
  [:li [:span first " " last]])

(defn user-list []
  [:div
    [:h1 "Friends list"]
    [:ul
      (for [u (:users @db/app-state)]
        ^{:key u} [user u])]])
