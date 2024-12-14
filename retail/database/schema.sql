-- SQL schema for retail sector
CREATE TABLE IF NOT EXISTS retail_data (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
