-- this file only stores sql queries

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    animal TEXT,
    date_of_birth DATE,
    colour VARCHAR(255)
);