// the seed file is used to run your initial SQL queries, especially the ones to CREATE our tables and INSERT seed data
import { db } from "./server.js";

//Create tables
db.query(
  `CREATE TABLE IF NOT EXISTS biscuits (
        id SERIAL PRIMARY KEY,
        biscuit_name VARCHAR(255),
        src TEXT,
        description TEXT,
        crunchiness INT
        
      );`
);

db.query(
  `CREATE TABLE IF NOT EXISTS flavours (
  id SERIAL PRIMARY KEY,
  flavour_name VARCHAR(255) 
); `
);

db.query(
  `CREATE TABLE IF NOT EXISTS biscuits_flavours (
  flavour_id INTEGER REFERENCES flavours(id),
  biscuit_id INTEGER REFERENCES biscuits(id),
  PRIMARY KEY (flavour_id, biscuit_id)
);`
);

//Insert data into tables
db.query(`
    INSERT INTO flavours (flavour_name) VALUES ('chocolate'), ('oaty'), ('vanilla');
    `);

db.query(`INSERT INTO biscuits (biscuit_name, src, description, crunchiness) 
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Mouth-watering piece of heaven', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4); `);

db.query(`INSERT INTO biscuits_flavours (flavour_id, biscuit_id)
VALUES (1, 1), (3, 2), (2, 3), (1, 3), (1, 5)`);
