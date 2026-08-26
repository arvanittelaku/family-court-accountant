"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PUBLIC_SITE_URL, SITE_EMAIL } from "@/lib/site";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

/**
 * POST JSON to `/api/submit-lead` → n8n webhook (Lead_notification_setup.md).
 * Netlify: Lead_notification_url + NEXT_PUBLIC_SITE_URL.
 */
export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const formspreeUrl = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : null;

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
        className="form-minimal max-w-lg space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setPending(true);
          const form = e.currentTarget;
          const fd = new FormData(form);

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
            const apiRes = await fetch("/api/submit-lead", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (apiRes.ok) {
              router.push("/thank-you");
              return;
            }

            const errJson = (await apiRes.json().catch(() => null)) as {
              error?: string;
            } | null;

            if (apiRes.status === 503 && formspreeUrl) {
              const fsBody = new FormData(form);
              fsBody.append("_subject", "FamilyCourtAccountant enquiry");
              fsBody.append(
                "_redirect",
                `${PUBLIC_SITE_URL.replace(/\/$/, "")}/thank-you`,
              );

              const fsRes = await fetch(formspreeUrl, {
                method: "POST",
                body: fsBody,
                headers: { Accept: "application/json" },
              });
              if (fsRes.ok) {
                router.push("/thank-you");
                return;
              }
            }

            setError(
              errJson?.error === "LEAD_DESTINATION_MISSING" ||
                errJson?.error === "SHEETS_WRITE_FAILED" ||
                errJson?.error === "WEBHOOK_MISSING" ||
                errJson?.error === "WEBHOOK_UNREACHABLE" ||
                errJson?.error === "WEBHOOK_REJECTED"
                ? `We could not save your enquiry. Please email ${SITE_EMAIL} directly.`
                : `Could not submit your enquiry. Please try again or email ${SITE_EMAIL}.`,
            );
          } catch {
            setError("Network error. Please try again.");
          } finally {
            setPending(false);
          }
        }}
      >
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
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
          />
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
