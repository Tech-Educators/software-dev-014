CREATE TABLE IF NOT EXISTS coasterrollers(
  id SERIAL PRIMARY KEY,
  coaster_name TEXT,
  location VARCHAR(255),
  height INT
);

INSERT INTO coasterrollers (coaster_name, location, height)
VALUES
('Kingda Ka','USA', 139),
('Steel Dragon 2000', 'Japan',97),
('Top Thrill Dragster', 'USA', 128),
('Red Force', 'Spain', 112),
('Fury', 'USA', 99)
;