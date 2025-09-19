
// lib/insertTest.js
import { supabase } from "./supabaseClient"

// insert a test submission
export async function insertTestSubmission(applicationText) {
  const { data, error } = await supabase
    .from("test_submission") // 👈 table name
    .insert([{ application: applicationText }]) // 👈 correct column name

  if (error) {
    console.error("Error inserting test submission:", error.message)
    return null
  }

  return data
}
