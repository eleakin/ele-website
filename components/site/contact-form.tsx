"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ContactSchema, type ContactValues } from "@/lib/validations/contact";
import { submitContact } from "@/app/contact/actions";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur",
  });

  // Register phone separately so we can live-format keystrokes to XXX-XXX-XXXX.
  const phoneReg = register("phone");

  async function onSubmit(values: ContactValues) {
    setFormError(null);
    const result = await submitContact(values);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setFormError(result.error);
    }
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
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="phone"
          label="Phone"
          helper="Format: XXX-XXX-XXXX"
          error={errors.phone?.message}
          input={
            <Input
              id="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="555-123-4567"
              maxLength={12}
              aria-invalid={!!errors.phone}
              {...phoneReg}
              onChange={(e) => {
                e.target.value = formatPhone(e.target.value);
                phoneReg.onChange(e);
              }}
            />
          }
        />
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
      </div>
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
      {formError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{formError}</span>
        </div>
      )}
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

// Progressively format keystrokes into XXX-XXX-XXXX (caps at 10 digits).
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
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
