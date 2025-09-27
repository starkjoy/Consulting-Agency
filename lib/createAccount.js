
import { supabase } from "./supabaseClient";

export async function createAccount(email, name) {
  // Check if user already exists

  const { data: existing, error: fetchError } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (fetchError) return { error: fetchError };
  if (existing) return { error: { message: "User already exists" } };

  // Send magic link
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000/", // 👈 page user goes to after click
      shouldCreateUser: true, // 👈 auto-create account if user doesn't exist
    },
  })
  if (error) return { error };
  return { success: true };
}
