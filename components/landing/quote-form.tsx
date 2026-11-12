"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { BUSINESS } from "@/lib/site"
import { submitLead } from "@/lib/leads"
import { trackGenerateLead } from "@/lib/analytics"

const tel = `tel:${BUSINESS.phone.replace(/-/g, "")}`

export type QuoteOption = { value: string; label: string }

export type QuoteExtraField = {
  name: string
  label: string
  kind: "select" | "text"
  options?: QuoteOption[]
  placeholder?: string
  inputMode?: "text" | "numeric" | "tel"
}

const fieldClass =
  "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00ffd5]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffd5]/50 transition-colors disabled:opacity-50"

type QuoteFormProps = {
  page: string
  campaign: string
  heading: string
  needOptions: QuoteOption[]
  extraFields: QuoteExtraField[]
}

function labelPhrase(label: string) {
  return `${label.charAt(0).toLowerCase()}${label.slice(1)}`
}

function validate(values: Record<string, string>, extraFields: QuoteExtraField[], needOptions: QuoteOption[]) {
  const errors: Record<string, string> = {}
  if (!values.name?.trim()) errors.name = "Enter your name."
  if (!values.business?.trim()) errors.business = "Enter the business name."
  const digits = (values.phone ?? "").replace(/\D/g, "")
  if (digits.length < 10) errors.phone = "Enter a phone number with an area code."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email?.trim() ?? "")) {
    errors.email = "Enter a valid email address."
  }
  if (!needOptions.some((option) => option.value === values.need)) {
    errors.need = "Select what you need."
  }
  for (const field of extraFields) {
    const value = values[field.name]?.trim() ?? ""
    const allowed = field.kind !== "select" || field.options?.some((option) => option.value === value)
    if (!value || !allowed) {
      const verb = field.kind === "select" ? "Select the" : "Enter the"
      errors[field.name] = `${verb} ${labelPhrase(field.label)}.`
    }
  }
  return errors
}

export function QuoteForm({ page, campaign, heading, needOptions, extraFields }: QuoteFormProps) {
  const router = useRouter()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const values = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([key, value]) => [key, String(value)]),
    )
    const nextErrors = validate(values, extraFields, needOptions)
    setErrors(nextErrors)
    setFormError(null)

    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    setIsSubmitting(true)
    try {
      const fields: Record<string, string> = {}
      for (const field of extraFields) {
        fields[field.name] = values[field.name] ?? ""
      }
      await submitLead({
        name: values.name,
        business: values.business,
        phone: values.phone,
        email: values.email,
        need: values.need,
        page,
        campaign,
        fields,
      })
      trackGenerateLead({ page, campaign })
      router.push("/thank-you")
    } catch {
      setFormError("Something went wrong and the form was not sent. Please try again, or call us.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-6 sm:p-10 rounded-2xl bg-[#0a0a0f] border border-white/10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{heading}</h2>
      <p className="text-white/60 mb-8">Fields marked with a star are required.</p>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Name" name="name" error={errors.name}>
            <input
              id="lead-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              disabled={isSubmitting}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "lead-name-error" : undefined}
              className={fieldClass}
            />
          </Field>
          <Field label="Business name" name="business" error={errors.business}>
            <input
              id="lead-business"
              name="business"
              type="text"
              autoComplete="organization"
              required
              disabled={isSubmitting}
              aria-invalid={errors.business ? true : undefined}
              aria-describedby={errors.business ? "lead-business-error" : undefined}
              className={fieldClass}
            />
          </Field>
          <Field label="Phone" name="phone" error={errors.phone}>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              disabled={isSubmitting}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "lead-phone-error" : undefined}
              className={fieldClass}
            />
          </Field>
          <Field label="Email" name="email" error={errors.email}>
            <input
              id="lead-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              disabled={isSubmitting}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "lead-email-error" : undefined}
              className={fieldClass}
            />
          </Field>
        </div>

        <Field label="What you need" name="need" error={errors.need}>
          <select
            id="lead-need"
            name="need"
            required
            defaultValue=""
            disabled={isSubmitting}
            aria-invalid={errors.need ? true : undefined}
            aria-describedby={errors.need ? "lead-need-error" : undefined}
            className={`${fieldClass} text-white/80`}
          >
            <option value="" disabled className="bg-[#0a0a0f]">
              Select one
            </option>
            {needOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#0a0a0f]">
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        {extraFields.map((field) => (
          <Field key={field.name} label={field.label} name={field.name} error={errors[field.name]}>
            {field.kind === "select" ? (
              <select
                id={`lead-${field.name}`}
                name={field.name}
                required
                defaultValue=""
                disabled={isSubmitting}
                aria-invalid={errors[field.name] ? true : undefined}
                aria-describedby={errors[field.name] ? `lead-${field.name}-error` : undefined}
                className={`${fieldClass} text-white/80`}
              >
                <option value="" disabled className="bg-[#0a0a0f]">
                  Select one
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value} className="bg-[#0a0a0f]">
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`lead-${field.name}`}
                name={field.name}
                type="text"
                inputMode={field.inputMode ?? "text"}
                placeholder={field.placeholder}
                required
                disabled={isSubmitting}
                aria-invalid={errors[field.name] ? true : undefined}
                aria-describedby={errors[field.name] ? `lead-${field.name}-error` : undefined}
                className={fieldClass}
              />
            )}
          </Field>
        ))}

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-h-12 px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,213,0.4)] transition-all duration-300 disabled:opacity-50 disabled:hover:shadow-none inline-flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              "Get My Quote"
            )}
          </button>
          <p className="mt-4 text-sm text-white/60">Submit the form and we call you the next business day.</p>
        </div>

        {formError && (
          <p role="alert" className="text-sm text-red-400">
            {formError}{" "}
            <a href={tel} className="text-[#00ffd5] underline underline-offset-4">
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        )}
      </form>
    </div>
  )
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string
  name: string
  error?: string
  children: React.ReactNode
}) {
  const errorId = `lead-${name}-error`
  return (
    <div>
      <label htmlFor={`lead-${name}`} className="block text-sm font-medium text-white/80 mb-2">
        {label} <span className="text-[#00ffd5]" aria-hidden="true">*</span>
        <span className="sr-only"> required</span>
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
