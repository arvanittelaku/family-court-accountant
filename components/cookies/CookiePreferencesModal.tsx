"use client";

import Link from "next/link";
import { startTransition, useEffect, useRef, useState } from "react";
import { useCookieConsent } from "@/components/cookies/CookieConsentContext";
import {
  REJECT_NON_ESSENTIAL_PREFERENCES,
  type CookiePreferences,
} from "@/lib/cookies/types";

function CategoryRow({
  id,
  title,
  body,
  checked,
  disabled,
  onToggle,
}: {
  id: string;
  title: string;
  body: string;
  checked: boolean;
  disabled?: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex gap-4 rounded-[var(--radius-card)] border border-border bg-section-alt p-4 sm:p-5">
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-heading" id={`${id}-label`}>
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-body">{body}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        disabled={disabled}
        onClick={onToggle}
        className={`relative h-8 w-14 shrink-0 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${
          checked ? "bg-accent" : "bg-border"
        } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <span
          className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow transition motion-reduce:transition-none ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
          aria-hidden
        />
      </button>
    </div>
  );
}

export function CookiePreferencesModal() {
  const { hydrated, record, modalOpen, closeModal, saveCustomPreferences } =
    useCookieConsent();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [draft, setDraft] = useState<CookiePreferences>(
    REJECT_NON_ESSENTIAL_PREFERENCES,
  );

  useEffect(() => {
    if (!modalOpen) return;
    startTransition(() => {
      setDraft(record?.preferences ?? REJECT_NON_ESSENTIAL_PREFERENCES);
    });
  }, [modalOpen, record]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el || !hydrated) return;
    if (modalOpen) {
      if (!el.open) el.showModal();
      requestAnimationFrame(() => titleRef.current?.focus());
    } else if (el.open) {
      el.close();
    }
  }, [modalOpen, hydrated]);

  const setCat = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return;
    setDraft((d) => ({ ...d, [key]: value }));
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cookie-modal-title"
      className="fixed inset-0 z-[110] m-auto w-[min(calc(100vw-1.5rem),28rem)] max-h-[min(90dvh,42rem)] overflow-hidden rounded-2xl border-0 bg-white p-0 text-body shadow-2xl ring-1 ring-border backdrop:bg-primary/60 [&::backdrop]:bg-primary/60"
      onClose={closeModal}
      onCancel={(e) => {
        e.preventDefault();
        closeModal();
      }}
    >
      <div className="flex max-h-[min(90dvh,42rem)] flex-col">
        <div className="border-b border-border bg-primary px-5 py-4 text-white sm:px-6">
          <h2
            ref={titleRef}
            id="cookie-modal-title"
            tabIndex={-1}
            className="text-lg font-bold tracking-tight outline-none"
          >
            Cookie preferences
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            Necessary cookies stay on so the site works. Optional categories
            load third-party tools only when enabled.
          </p>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4 sm:px-6">
          <CategoryRow
            id="cat-necessary"
            title="Necessary cookies"
            body="Security, consent storage, and core navigation. Always active."
            checked
            disabled
            onToggle={() => {}}
          />
          <CategoryRow
            id="cat-analytics"
            title="Analytics"
            body="Audience measurement (e.g. Google Analytics, Hotjar) to improve content."
            checked={draft.analytics}
            onToggle={() => setCat("analytics", !draft.analytics)}
          />
          <CategoryRow
            id="cat-marketing"
            title="Marketing"
            body="Advertising and social measurement (e.g. Meta Pixel, LinkedIn Insight, GTM)."
            checked={draft.marketing}
            onToggle={() => setCat("marketing", !draft.marketing)}
          />
          <CategoryRow
            id="cat-preferences"
            title="Preferences"
            body="Remembers optional UI or feature choices when we offer them."
            checked={draft.preferences}
            onToggle={() => setCat("preferences", !draft.preferences)}
          />
        </div>

        <div className="border-t border-border bg-white px-5 py-4 sm:px-6">
          <p className="text-xs leading-relaxed text-body/70">
            California residents: we do not sell personal information. See our{" "}
            <Link href="/cookies" className="font-medium text-accent hover:underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-medium text-accent hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="min-h-[44px] rounded border border-border px-4 py-2.5 text-sm font-semibold text-heading transition hover:bg-section-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => saveCustomPreferences(draft)}
              className="min-h-[44px] rounded bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Save preferences
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
