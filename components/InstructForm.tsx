"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SITE_EMAIL } from "@/lib/site";

/**
 * Webhook + Sheets via /api/submit-lead (primary).
 * Optional /api/instruct is soft-awaited when available.
 */
export function InstructForm() {
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
            organization: String(fd.get("organization") ?? "").trim(),
            formType: "instruct" as const,
            message: String(fd.get("message") ?? "").trim(),
          };

          if (!payload.fullName || !payload.email) {
            setError("Please enter your name and email.");
            setPending(false);
            return;
          }

          try {
            const leadRes = await fetch("/api/submit-lead", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (!leadRes.ok) {
              setError(
                `Could not submit your instruction. Please try again or email ${SITE_EMAIL}.`,
              );
              return;
            }

            try {
              await fetch("/api/instruct", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                keepalive: true,
              });
            } catch {
              /* submit-lead already handled webhook + Sheets */
            }

            router.push("/thank-you");
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
          <input name="phone" type="tel" autoComplete="tel" />
        </label>

        <label className="block">
          Firm / Organisation
          <input
            name="organization"
            type="text"
            autoComplete="organization"
          />
        </label>

        <label className="block">
          Case brief *
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Matter type, stage, deadlines, and documents available"
          />
        </label>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-[44px] w-full items-center justify-center border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending…" : "Submit instruction"}
        </button>

        <p className="text-xs leading-relaxed text-muted">
          All instructions are confidential. We do not share your information
          with third parties.
        </p>
      </form>
    </div>
  );
}
