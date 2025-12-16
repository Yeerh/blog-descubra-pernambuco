import { createClient } from '@supabase/supabase-js'

// Cole sua URL e anon key do Supabase (vá em Project Settings → API)
const supabaseUrl = 'https://ggcrmmlmyqrcllazrkta.supabase.co' // ex: https://abcde.supabase.co
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnY3JtbWxteXFyY2xsYXpya3RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NDEzMTksImV4cCI6MjA4MTQxNzMxOX0.mjyGb3yQ9JLfF_y74kchrOCFFmuGVxMYkEWC6qRfLXE' // a chave pública que começa com eyJhbGci

export const supabase = createClient(supabaseUrl, supabaseAnonKey)