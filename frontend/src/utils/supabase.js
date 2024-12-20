
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
console.log(supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);
// console.log("Supabase URL:", supabaseUrl);
// console.log("Supabase Key:", supabaseKey);
// console.log("Supabase Instance:", supabase);

export default supabase;
        