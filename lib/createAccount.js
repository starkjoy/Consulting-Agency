// createAccount.js
import { supabase } from "./supabaseClient"

export async function createAccount(email, name) {
  if (!email) return { error: { message: "Email is required" } }

  // Optional: check if user already exists in your "users" table
  const { data: existing, error: fetchError } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .maybeSingle()

  if (fetchError) return { error: fetchError }
  if (existing) return { error: { message: "User already exists" } }

  // Send magic link
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000/",
      shouldCreateUser: true,
    },
  })

  if (error) return { error }

  // After magic link login completes
  const { data: { user }, error: userError } = await supabase.auth.getUser()

  if (userError) return { error: userError }

  return { success: true, userId: user?.id }
}
