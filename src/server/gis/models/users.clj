(ns gis.models.users
  (:require [next.jdbc :as jdbc]
            [next.jdbc.sql :as sql]))

(def ^:private initial-roles
  "List of roles"
  [{:title "Post Admin" :slug "posts/admin" :description "edit all posts"}
   {:title "Post Editor" :slug "posts/editor" :description "edit personal posts"}
   {:title "Post Browser" :slug "posts/browse" :description "browse all posts"}
   {:title "Anonymous" :slug "posts/anonymous" :description "browse all posts"}])

(def ^:private initial-permissions
  "List of permissions"
  [{:title "Create Post" :slug "post/add" :description "add posts"}
   {:title "Read Post" :slug "post/read" :description "read posts"}
   {:title "Update Post" :slug "post/update" :description "update posts"}
   {:title "Delete Post" :slug "post/delete" :description "delete posts"}])

(def ^:private initial-users 
  "List of users"
  [{:first_name "Dudley" :last_name "Craig" :email "dudleycraig@gmail.com" :password "password" :role_id "1"}])

(def ^:private initial-roles-permissions
  "List of roles-permissions"
  [{:role_id 1 :permission_id 1}
   {:role_id 1 :permission_id 2}
   {:role_id 1 :permission_id 3}
   {:role_id 2 :permission_id 1}
   {:role_id 2 :permission_id 2}
   {:role_id 2 :permission_id 3}
   {:role_id 3 :permission_id 2}])

(defn populate
  [db db-type]
  (let [auto-key (if (= "sqlite" db-type)
                   "primary key autoincrement"
                   (str "generated always as identity"
                        " (start with 1, increment by 1)"
                        " primary key"))]
    (try
      (jdbc/execute-one! db
                         [(str "create table role ("
                               "id            integer       " auto-key " not null,"
                               "active        integer       default 1,"
                               "title         varchar(32)   not null,"
                               "slug          varchar(128)  not null,"
                               "description   text          default null,"
                               "created       timestamp     default (strftime('%s', 'now')),"
                               "updated       timestamp     default (strftime('%s', 'now')),"
                               "unique(title),"
                               "unique(slug)"
                               ")")])
      (jdbc/execute-one! db
                         [(str "create table permission ("
                               "id            integer       " auto-key " not null,"
                               "active        integer       default 1,"
                               "title         varchar(32)   not null,"
                               "slug          varchar(128)  not null,"
                               "description   text          default null,"
                               "created       timestamp     default (strftime('%s', 'now')),"
                               "updated       timestamp     default (strftime('%s', 'now')),"
                               "unique(title),"
                               "unique(slug)"
                               ")")])
      (jdbc/execute-one! db
                         [(str "create table user ("
                               "id            integer       " auto-key " not null,"
                               "role_id       integer       default 3,"
                               "first_name    varchar(32)   not null,"
                               "last_name     varchar(32)   not null,"
                               "email         varchar(128)  not null,"
                               "registered    timestamp     default (strftime('%s', 'now')),"
                               "last_login    timestamp     default (strftime('%s', 'now')),"
                               "password      blob          not null,"
                               "foreign key(role_id) references role(id),"
                               "unique(email)"
                               ")")])
      (jdbc/execute-one! db
                         [(str "create table role_permission ("
                               "role_id       integer       default null,"
                               "permission_id integer       default null,"
                               "created       timestamp     default (strftime('%s', 'now')),"
                               "updated       timestamp     default (strftime('%s', 'now')),"
                               "primary key(role_id, permission_id),"
                               "foreign key(role_id) references role(id),"
                               "foreign key(permission_id) references permission(id)"
                               ")")])
      (println "Created tables role, permission, user, and role_permission.")

      (try
        (doseq [row initial-roles] (sql/insert! db :role row))
        (doseq [row initial-permissions] (sql/insert! db :permission row))
        (doseq [row initial-users] (sql/insert! db :user row))
        (doseq [row initial-roles-permissions] (sql/insert! db :role_permission row))
        (println "Populated tables role, permission, user, and role_permission.")
        (catch Exception e
          (println "Exception: " (ex-message e))
          (println "Failed populating tables role, permission, user, and role_permission -- whoops!")))
      (catch Exception e
        (println "Tables already exist, assuming they're populated and moving on.")))))

(defn get-users
  [db]
  (sql/query db [(str "select user.* from user "
                      "join role on user.role_id = role.id "
                      "order by user.last_name ")]))

(defn get-role-by-id [db user_id] (sql/query db :role user_id))

(defn get-permission-by-id [db permission_id] (sql/query db :permission permission_id))

(defn get-role-permissions [db role_id] (sql/query db [(str "select role_permission.* from role_permission "
                                                            "where role_permission.role_id = " role_id)]))

(defn get-user-by-id [db id] (sql/query db :user id))

