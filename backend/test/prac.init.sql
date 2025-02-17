CREATE DATABASE film_service;
\c film_service;

CREATE TABLE films (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_date DATE,
    duration INT,
    genre VARCHAR(100)
);

CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    film_id INT REFERENCES films(id) ON DELETE CASCADE,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    hall VARCHAR(100)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    schedule_id INT REFERENCES schedules(id) ON DELETE CASCADE,
    seats TEXT NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
