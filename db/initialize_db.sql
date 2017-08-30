-- Create tables in database

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  authId TEXT NOT NULL,
  profileName TEXT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  location TEXT,
  picture TEXT
);