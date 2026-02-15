
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ulrubymazvpgcgkbzdva.supabase.co';
const supabaseKey = 'sb_publishable_F_mJ47qKXWSBfTrCVau1oQ_ESapHRZs';

export const supabase = createClient(supabaseUrl, supabaseKey);
