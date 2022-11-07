USE `full-stack-ecommerce`;

-- STEP 1: clean up previous database tables
-- Temporarily disable foreign key
SET FOREIGN_KEY_CHECKS=0;

-- Delete record using truncate because of speed faster
TRUNCATE customer;
TRUNCATE orders;
TRUNCATE order_item;
TRUNCATE address;

SET FOREIGN_KEY_CHECKS=1;

-- Step 2: make the email address unique

ALTER TABLE customer ADD UNIQUE (email);