/**
 * Public address of the site, used for robots.txt, the sitemap and social previews.
 *
 * Once there is a custom domain, set NEXT_PUBLIC_SITE_URL (e.g. https://example.com)
 * in the hosting dashboard. Until then, Vercel's own production address is used,
 * and localhost when running locally.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl().replace(/\/$/, "");
