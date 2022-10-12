CREATE DATABASE tasksdb;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    complete BOOLEAN DEFAULT false
);
