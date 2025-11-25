import posthog from "posthog-js";

if (
  typeof process.env.NEXT_PUBLIC_POSTHOG_KEY === "string" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY.length > 0
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    // Use the local /ingest path so Next.js rewrites forward requests to PostHog
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    // We capture pageviews manually via the PostHogProvider in the app
    capture_pageview: false,
    // Enable pageleave capture
    capture_pageleave: true,
    debug: process.env.NODE_ENV === "development",
  });
} else {
  // NEXT_PUBLIC_POSTHOG_KEY is not set; skip initialization.
}

export default posthog;
