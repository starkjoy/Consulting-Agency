// signAccount.js
import { supabase } from "./supabaseClient";

export async function signAccount(email) {
  if (!email) return { error: { message: "Email is required" } };

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000/", // redirect after magic link
    },
  });

  if (error) return { error };

  // No session yet — user must click magic link first
  return { success: true, message: "Magic link sent to email" };
}
