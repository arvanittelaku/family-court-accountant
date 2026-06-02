"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PUBLIC_SITE_URL, SITE_EMAIL } from "@/lib/site";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

/**
 * Contact intake: POST JSON to `/api/submit-lead`.
 * Writes full lead to Google Sheets and/or forwards core fields to Lead_notification_url.
 * Formspree fallback on 503 when webhook/sheets are not configured.
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
          className="mb-4 rounded border border-red-200 bg-red-50 p-4 text-sm text-body"
        >
          {error}
        </div>
      ) : null}
      <form
        className="space-y-5"
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setPending(true);
          const form = e.currentTarget;
          const fd = new FormData(form);

          const fullName = String(fd.get("full_name") ?? "").trim();
          const email = String(fd.get("email") ?? "").trim();
          const phone = String(fd.get("phone") ?? "").trim();

          const payload = {
            fullName,
            email,
            phone,
            organisation: String(fd.get("organisation") ?? "").trim(),
            role: String(fd.get("role") ?? "").trim(),
            proceedingsType: String(fd.get("proceedings_type") ?? "").trim(),
            serviceNeeded: String(fd.get("service_needed") ?? "").trim(),
            expertAppointment: String(fd.get("expert_appointment") ?? "").trim(),
            assetValue: String(fd.get("asset_value") ?? "").trim(),
            businessInvolved: String(fd.get("business_involved") ?? "").trim(),
            urgency: String(fd.get("urgency") ?? "").trim(),
            description: String(fd.get("description") ?? "").trim(),
          };

          if (!payload.fullName || !payload.email) {
            setError("Please enter your full name and email.");
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
              message?: string;
            } | null;

            if (apiRes.status === 503 && formspreeUrl) {
              const fsBody = new FormData(form);
              fsBody.append("_subject", "FamilyCourtAccountant enquiry");
              fsBody.append(
                "_redirect",
                `${PUBLIC_SITE_URL.replace(/\/$/, "")}/thank-you`,
              );
              if (phone) fsBody.set("phone", phone);

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
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-heading">
            Full Name *
            <input
              required
              name="full_name"
              type="text"
              autoComplete="name"
              className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
            />
          </label>
          <label className="block text-sm font-medium text-heading">
            Organisation / Law Firm
            <input
              name="organisation"
              type="text"
              autoComplete="organization"
              placeholder="Leave blank if individual"
              className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
            />
          </label>
          <label className="block text-sm font-medium text-heading sm:col-span-2">
            You are: *
            <select
              required
              name="role"
              className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
              defaultValue=""
            >
              <option value="">Select...</option>
              <option value="Family Law Solicitor / Barrister">
                Family Law Solicitor / Barrister
              </option>
              <option value="Individual / Self-represented">
                Individual / Self-represented
              </option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-heading">
            Email *
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
            />
          </label>
          <label className="block text-sm font-medium text-heading">
            Phone
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Include country code if outside UK"
              className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-heading">
          Proceedings Type
          <select
            name="proceedings_type"
            className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
            defaultValue=""
          >
            <option value="">Select...</option>
            <option value="Financial Remedy (Divorce)">Financial Remedy (Divorce)</option>
            <option value="Schedule 1 (Children Act)">Schedule 1 (Children Act)</option>
            <option value="TOLATA (Cohabitation)">TOLATA (Cohabitation)</option>
            <option value="Nuptial Agreement">Nuptial Agreement</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-heading">
          What Do You Need
          <select
            name="service_needed"
            className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
            defaultValue=""
          >
            <option value="">Select...</option>
            <option value="Business Valuation">Business Valuation</option>
            <option value="Hidden Asset Investigation">Hidden Asset Investigation</option>
            <option value="Form E Review">Form E Review</option>
            <option value="Lifestyle / Income Analysis">Lifestyle / Income Analysis</option>
            <option value="Add-Backs Analysis">Add-Backs Analysis</option>
            <option value="Overseas Asset Analysis">Overseas Asset Analysis</option>
            <option value="Cryptocurrency">Cryptocurrency</option>
            <option value="All of the Above / Not Sure">All of the Above / Not Sure</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-heading">
          SJE or party-appointed (solicitors only)
          <select
            name="expert_appointment"
            className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
            defaultValue=""
          >
            <option value="">Select...</option>
            <option value="SJE">SJE</option>
            <option value="Party-appointed">Party-appointed</option>
            <option value="Not decided">Not decided</option>
          </select>
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-heading">
            Approximate total asset value
            <select
              name="asset_value"
              className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
              defaultValue=""
            >
              <option value="">Select...</option>
              <option value="Under £500k">Under £500k</option>
              <option value="£500k–£2M">£500k–£2M</option>
              <option value="£2M–£10M">£2M–£10M</option>
              <option value="Over £10M">Over £10M</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-heading">
            Business involved?
            <select
              name="business_involved"
              className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
              defaultValue=""
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unknown">Unknown</option>
            </select>
          </label>
        </div>

        <label className="block text-sm font-medium text-heading">
          Urgency
          <select
            name="urgency"
            className="mt-1 block w-full min-h-[44px] rounded border border-border px-3 py-2 text-body"
            defaultValue=""
          >
            <option value="">Select...</option>
            <option value="Standard">Standard</option>
            <option value="Urgent (within 1 week)">Urgent (within 1 week)</option>
            <option value="Critical (hearing imminent)">Critical (hearing imminent)</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-heading">
          Brief description
          <textarea
            name="description"
            rows={5}
            className="mt-1 block w-full rounded border border-border px-3 py-2 text-body"
          />
        </label>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Submitting..." : "Get Expert Help"}
        </button>
      </form>
    </div>
  );
}
