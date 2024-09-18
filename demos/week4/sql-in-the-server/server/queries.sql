-- this file only stores sql queries
-- you can see examples of all different queries from thsi demo

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    animal TEXT,
    date_of_birth DATE,
    colour VARCHAR(255)
);

-- insert data into a table
INSERT INTO staff (name, location, occupation, start_date)
VALUES ('Manny', 'Norwich', 'instructor', '2023-12-04'),
('Joe', 'Norwich', 'TA', '2024-01-05');

--I want to see the data I have in my table
SELECT * FROM staff;

-- I want to see specific columns in my table or specific rows of data
SELECT * FROM staff WHERE name = 'Joe'
SELECT name, location FROM staff WHERE name = 'Joe'