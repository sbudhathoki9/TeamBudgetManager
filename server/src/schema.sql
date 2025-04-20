CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  position VARCHAR(50),
  jersey_number INT,
  photo_url TEXT
);
