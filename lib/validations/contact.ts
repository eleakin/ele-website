import { z } from "zod";

/**
 * Shared contact-form schema. Used by the client form (live validation) and
 * the server action (authoritative validation before the DB insert), so the
 * two can never drift apart. Bounds mirror the CHECK constraints on the
 * `contact_submissions` table.
 */
export const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(200, "That name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(320, "That email is too long."),
  phone: z
    .string()
    .trim()
    .regex(/^\d{3}-\d{3}-\d{4}$/, "Please enter a 10-digit phone number."),
  organization: z
    .string()
    .trim()
    .min(2, "Please enter your organization.")
    .max(200, "That organization name is too long."),
  message: z
    .string()
    .trim()
    .min(20, "A few more details help us prepare for the call (min 20 characters).")
    .max(5000, "That message is too long — please shorten it a little."),
});

export type ContactValues = z.infer<typeof ContactSchema>;
