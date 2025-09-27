
import { supabase } from "./supabaseClient"

export async function signAccount(email) {
  if (!email) return { error: { message: "Email is required" } }

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000/", // redirect after magic link
    },
  })

  if (error) return { error }
  return { success: true }
}
