import { createClient } from "@supabase/supabase-js";

export const Supabase = createClient(
    'https://xadmfzoocdgvffqevayf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZG1mem9vY2RndmZmcWV2YXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNjUxMDgsImV4cCI6MjAxMTc0MTEwOH0.2brAqJc_3ok3V8WvCX4rj3nBOWgv052eZgbJcW2Gzhk'
  );
