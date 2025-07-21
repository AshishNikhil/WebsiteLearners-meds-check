import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vrwvxajtpkbjnxklkjav.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyd3Z4YWp0cGtiam54a2xramF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MzMwNDksImV4cCI6MjA2ODQwOTA0OX0.clTLIfX4otye71P9egUMHOlt-tWn4XjLOvicv2BFa8A";

export const supabase = createClient(supabaseUrl, supabaseKey);
