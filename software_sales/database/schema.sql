-- SQL schema for software_sales sector
CREATE TABLE IF NOT EXISTS software_sales_data (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
