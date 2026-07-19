import { supabase } from "./supabase";

export async function getHero() {
  const { data, error } = await supabase
    .from("hero")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}