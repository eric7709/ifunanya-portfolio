// app/actions/auth.ts
"use server";

import { createClient } from "@/global/lib/supabaseCLient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}