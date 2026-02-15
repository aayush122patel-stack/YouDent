
-- ==========================================
-- SUPABASE DATABASE SETUP SCRIPT
-- ==========================================
-- Run this code in your Supabase SQL Editor.

-- 1. Create the appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  date date NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- 3. Clean up existing policies
DROP POLICY IF EXISTS "Allow authenticated inserts" ON appointments;
DROP POLICY IF EXISTS "Allow public inserts" ON appointments;
DROP POLICY IF EXISTS "Allow authenticated select" ON appointments;

-- 4. Allow public submissions (Anonymous users)
-- Since verification is removed, users are 'anon' when submitting.
CREATE POLICY "Allow public inserts" 
ON appointments 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 5. Allow you to view records in the dashboard
CREATE POLICY "Allow authenticated select" 
ON appointments 
FOR SELECT 
TO authenticated 
USING (true);
