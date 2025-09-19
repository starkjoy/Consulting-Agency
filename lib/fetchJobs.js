
// lib/fetchJobs.js
import { supabase } from './supabaseClient'

export async function fetchJobs() {
  const { data, error } = await supabase
    .from('jobs')
    .select('id, title, description')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching jobs:', error.message)
    return []
  }

  return data
}
