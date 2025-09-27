// lib/subscription.js
import { supabase } from "./supabaseClient"

// insert a test submission
export async function getSubscribed(emailer) {
  const { data, error } = await supabase
    .from("subscriptions")
    .insert([{
      email: emailer,
      random_key: Math.random() // assign random number 0-1
    }])
    .select()

  if (error) {
    console.error("Error subscribing, please try again:", error.message)
    return null
  }

  return data
}
