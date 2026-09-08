"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SITE_EMAIL } from "@/lib/site";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

async function parseSubmitError(res: Response): Promise<string> {
  const data = (await res.json().catch(() => null)) as {
    message?: string;
    error?: string;
  } | null;

  if (data?.message) return data.message;
  if (data?.error === "LEAD_DESTINATION_MISSING") {
    return `We could not save your enquiry. Please email ${SITE_EMAIL} directly.`;
  }
  return `Could not submit your enquiry. Please try again or email ${SITE_EMAIL}.`;
}

/**
 * Contact form → /api/submit-lead (webhook + Google Sheets).
 */
export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <div>
      {error ? (
        <div
          role="alert"
          className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-body"
        >
          {error}
        </div>
      ) : null}
      <form
        name="contact"
        method="POST"
        action="/__forms.html"
        className="form-minimal max-w-lg space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setPending(true);

          const fd = new FormData(e.currentTarget);
          const payload = {
            fullName: String(fd.get("full_name") ?? "").trim(),
            email: String(fd.get("email") ?? "").trim(),
            phone: String(fd.get("phone") ?? "").trim(),
            formType: "contact" as const,
            message: String(fd.get("message") ?? "").trim(),
          };

          if (!payload.fullName || !payload.email) {
            setError("Please enter your name and email.");
            setPending(false);
            return;
          }

          try {
            const res = await fetch("/api/submit-lead", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (!res.ok) {
              setError(await parseSubmitError(res));
              return;
            }

            try {
              await submitNetlifyForm("contact", {
                full_name: payload.fullName,
                email: payload.email,
                phone: payload.phone,
                message: payload.message,
              });
            } catch {
              // Webhook/Sheets already stored the enquiry; don't block the visitor.
            }

            router.push("/thank-you");
          } catch {
            setError("Network error. Please try again.");
          } finally {
            setPending(false);
          }
        }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" aria-hidden="true">
          <label>
            Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <label className="block">
          Full name *
          <input
            required
            name="full_name"
            type="text"
            autoComplete="name"
          />
        </label>

        <label className="block">
          Email *
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
          />
        </label>

        <label className="block">
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>

        <label className="block">
          Brief description
          <textarea name="message" rows={4} />
        </label>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-[44px] w-full items-center justify-center border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending…" : "Send enquiry"}
        </button>

        <p className="text-xs leading-relaxed text-muted">
          All enquiries are confidential. We do not share your information with
          third parties.
        </p>
      </form>
    </div>
  );
}
