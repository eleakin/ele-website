"use server";

import { ContactSchema, type ContactValues } from "@/lib/validations/contact";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type ContactResult = { ok: true } | { ok: false; error: string };

/**
 * Server Action: validate and persist a public contact-form submission.
 * Runs on the server, re-validates with the shared schema (never trust the
 * client), and inserts into `public.contact_submissions`. RLS allows the
 * anonymous role to INSERT only — no auth required.
 */
export async function submitContact(values: ContactValues): Promise<ContactResult> {
  const parsed = ContactSchema.safeParse(values);
  if (!parsed.success) {
    return { ok: false, error: "Please check the form and try again." };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
      .from("contact_submissions")
      .insert(parsed.data);

    if (error) {
      console.error("[contact] insert failed:", error.message);
      return {
        ok: false,
        error:
          "Something went wrong on our end. Please try again, or email us directly.",
      };
    }
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return {
      ok: false,
      error:
        "Something went wrong on our end. Please try again, or email us directly.",
    };
  }

  return { ok: true };
}
