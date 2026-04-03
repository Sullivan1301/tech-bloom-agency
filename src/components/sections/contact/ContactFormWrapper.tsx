"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ContactForm = dynamic(
  () => import("./ContactForm").then((mod) => mod.ContactForm),
  { ssr: false, loading: () => <div className="h-96 bg-white rounded-md animate-pulse" /> }
);

export function ContactFormWrapper() {
  return (
    <Suspense fallback={<div className="h-96 bg-white rounded-md animate-pulse" />}>
      <ContactForm />
    </Suspense>
  );
}
