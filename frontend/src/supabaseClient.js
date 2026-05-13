import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
    "https://jhrnqijbghrhbvrdsbaq.supabase.co";

const supabaseKey =
    "sb_publishable_Vzag9wlHOYiZXbeQfhvItQ_Pzq070R6";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);