-- Create a new table
CREATE TABLE IF NOT EXISTS biscuits (
id SERIAL PRIMARY KEY, --unique
biscuit_name VARCHAR(255) NOT NULL,
src TEXT NOT NULL, 
description TEXT,
crunchiness INTEGER
);

-- Insert data into biscuits table
INSERT INTO biscuits (biscuit_name, src, description, crunchiness) 
VALUES (
  'Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Piece of heaven on earth', 6
),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Mouth-watering piece of heaven', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4);

-- Get my data from biscuits table
-- SELECT * FROM biscuits;
-- SELECT * FROM biscuits WHERE crunchiness = 4;
-- SELECT biscuit_name, crunchiness FROM biscuits ORDER BY biscuit_name DESC;
-- SELECT biscuit_name, crunchiness FROM biscuits ORDER BY biscuit_name ASC;
-- SELECT biscuit_name, crunchiness FROM biscuits ORDER BY crunchiness DESC;
-- SELECT * FROM biscuits WHERE crunchiness = 4 LIMIT 2;

-- you can use different operators in the WHERE condition
SELECT * FROM biscuits WHERE crunchiness >= 4;

-- Update a row of data in our table
-- make sure you always have a condition, so you only update the data you are targeting
UPDATE biscuits SET crunchiness = 8 WHERE id = 1;

-- Delete a row of data in our table
-- make sure you have a condition to delete the right row of data!
DELETE FROM biscuits WHERE id = 5;