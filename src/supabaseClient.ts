import { createClient } from "@supabase/supabase-js";

// ⚠️ Reemplaza con tus credenciales de Supabase
const SUPABASE_URL = "https://tclchhosbcayyvfdbsvh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjbGNoaG9zYmNheXl2ZmRic3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjQ5OTIsImV4cCI6MjA1NjA0MDk5Mn0.VCKa1bYjrqW7u9iakGScXCL5BAZGnuh28dXTVjqdmKw";


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
