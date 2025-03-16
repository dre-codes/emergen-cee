// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lpfrlaobjcdhvrhvhmud.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwZnJsYW9iamNkaHZyaHZobXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMzgzNTAsImV4cCI6MjA1NzcxNDM1MH0.BXaQN04a5O5YCxryzcoYelIG205gA_etxRLFqUbJ7QQ";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
