DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS lists;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR(100) NOT NULL UNIQUE,
   email VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(60) NOT NULL,
   "name" VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
   id SERIAL PRIMARY KEY,
   title VARCHAR(255),
   creator INT,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY(creator) REFERENCES users(id)
);

CREATE TABLE lists (
   id SERIAL PRIMARY KEY,
   title VARCHAR(255),
   project INT,
   FOREIGN KEY(project) REFERENCES projects(id)
);

CREATE TABLE tasks (
   title VARCHAR(255),
   "description" VARCHAR(255),
   list INT,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY(list) REFERENCES lists(id)
);