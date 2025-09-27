import { supabase } from './supabaseClient'

export async function fetchCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('id, name, created_at')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error.message);
    return [];
  }

  return data;
}
