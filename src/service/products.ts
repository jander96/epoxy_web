import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fhukrgrbbwxpkbqquhgb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodWtyZ3JiYnd4cGticXF1aGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NzEzODgsImV4cCI6MjA4MTA0NzM4OH0.zFI0OBjiyOF_vd84peLWnvsVF9GL5ebAEAq66jTuK7Y"

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getProducts() {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw error;

  return data ?? [];
}