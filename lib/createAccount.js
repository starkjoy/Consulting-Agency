// lib/createAccount.js
import { supabase } from "./supabaseClient";

export async function createAccount(email, password) {
  if (!email || !password) {
    return { error: { message: "Email and password are required" } };
  }

  // Create the user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return { error };

  // Supabase returns both user and session automatically
  return {
    success: true,
    user: data.user,
    session: data.session, // ✅ session created and returned if email confirmation is disabled
  };
}
