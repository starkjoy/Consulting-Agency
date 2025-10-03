import { supabase } from './supabaseClient'

export async function fetchCompanies() {
  const { data, error } = await supabase
    .from('companies')
    .select('id, name, created_at')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error.message);
    return [];
  }

  return data;
}
