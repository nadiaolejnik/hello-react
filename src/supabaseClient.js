import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://zekefrbsuqbksswgruhr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla2VmcmJzdXFia3Nzd2dydWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NTE4MjMsImV4cCI6MTk5MzAyNzgyM30.QfzOQaD_eAExsWbSbSti2f3jKXRa7YUqTXfgsY5NEzM'

export const supabase = createClient(supabaseUrl, supabaseKey)