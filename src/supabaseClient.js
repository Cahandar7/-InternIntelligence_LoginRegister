import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yosumpisoebqnptxogfb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlvc3VtcGlzb2VicW5wdHhvZ2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyOTAyMzgsImV4cCI6MjA1Njg2NjIzOH0.wqi0ACdKWBul2WWnJgtf151EX8OhtwCR3ki1yIPbom4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
