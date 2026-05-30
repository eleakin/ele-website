"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  organization: z.string().min(2, "Please enter your organization."),
  message: z.string().min(20, "A few more details help us prepare for the call (min 20 characters)."),
});

type ContactValues = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur",
  });

  async function onSubmit(values: ContactValues) {
    // TODO: wire to your transactional email provider (Resend, Postmark, etc.)
    // or to a CRM webhook — e.g. POST `values` to /api/contact. See README.
    // Simulating a successful submission for now.
    void values;
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-10 text-accent" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl text-ink">Thanks — message received.</h2>
        <p className="mt-3 text-ink-muted">
          We reply to every inquiry within one business day. If your request is
          time-sensitive, email us directly and reference this form.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Your name"
          error={errors.name?.message}
          input={<Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />}
        />
        <Field
          id="email"
          label="Work email"
          error={errors.email?.message}
          input={
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
          }
        />
      </div>
      <Field
        id="organization"
        label="Organization"
        error={errors.organization?.message}
        input={
          <Input
            id="organization"
            autoComplete="organization"
            aria-invalid={!!errors.organization}
            {...register("organization")}
          />
        }
      />
      <Field
        id="message"
        label="What are you working on?"
        helper="A sentence or two is enough — we'll follow up to learn more."
        error={errors.message?.message}
        input={
          <Textarea
            id="message"
            rows={6}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        }
      />
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-ink-muted">
          By submitting you agree we may contact you about your inquiry.
        </p>
        <Button type="submit" variant="accent" size="lg" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="animate-spin" aria-hidden="true" />}
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  helper,
  error,
  input,
}: {
  id: string;
  label: string;
  helper?: string;
  error?: string;
  input: React.ReactNode;
}) {
  const helperId = helper ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-1.5" aria-describedby={[helperId, errorId].filter(Boolean).join(" ") || undefined}>
        {input}
      </div>
      {helper && !error && (
        <p id={helperId} className="mt-1.5 text-xs text-ink-muted">
          {helper}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
