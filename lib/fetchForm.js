// lib/fetchForm.js
import { supabase } from "./supabaseClient";

export async function fetchForm(userId) {
  if (!userId) return { error: { message: "No userId provided" } };

  const { data, error } = await supabase
    .from("stored-forms")
    .select("*")
    .eq("userID", userId) // 👈 make sure this matches your actual column name
    .order("created_at", { ascending: false }) // 👈 latest first
    .limit(1); // 👈 only fetch the latest

  if (error) return { error };

  // return a single object instead of an array
  return { data: data?.[0] ?? null };
}
