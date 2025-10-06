// createAccount.js
import { supabase } from "./supabaseClient"

export async function createAccount(email) {
  if (!email) return { error: { message: "Email is required" } }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000/",
      shouldCreateUser: true, // auto-create user if not existing
    },
  })

  if (error) return { error }

  // ✅ Try to get user (will only exist after login via link)
  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (userError) {
    // This error is normal before user clicks the link
    return { success: true, message: "Magic link sent to email" }
  }

  return { success: true, userId: userData?.user?.id }
}
