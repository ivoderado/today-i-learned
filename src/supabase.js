import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iexcfhgxpupghrrpeber.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlleGNmaGd4cHVwZ2hycnBlYmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MTQ4NDYsImV4cCI6MTk5NzQ5MDg0Nn0.RgYS29YJejRAugpoxf1r-FHwtRmsfK8PSMvN5Ex21HE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
