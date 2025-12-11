import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getProducts() {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw error;

  return data ?? [];
}