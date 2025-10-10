// lib/signAccount.js
import { supabase } from "./supabaseClient";

export async function signAccount(email, password) {
  if (!email || !password) {
    return { error: { message: "Email and password are required" } };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error };

  return {
    success: true,
    user: data.user,
    session: data.session, // ✅ includes access + refresh tokens
  };
}
