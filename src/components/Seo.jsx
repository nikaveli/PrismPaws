import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Prism Paws Pet Care';
const BASE_URL = 'https://www.yourpetsfavoritehuman.com';
const OG_IMAGE = `${BASE_URL}/assets/images/PRISM_PAWS_LOGO.png`;

/**
 * Seo
 *
 * Per-page meta + structured data manager. Drop one of these at the top of
 * every <main> on each page route.
 *
 * Props:
 *  - title:         Page title (becomes "<title> | Prism Paws Pet Care")
 *  - description:   Meta description (150–160 chars ideal)
 *  - path:          Path used to build canonical + og:url, e.g. "/services"
 *  - ogImage:       Override OG/Twitter image
 *  - jsonLd:        Optional JSON-LD object or array of objects (page-specific
 *                   structured data — FAQPage, BreadcrumbList, etc.)
 *
 * The site-wide LocalBusiness JSON-LD lives in /index.html so it's available
 * to crawlers without executing JS.
 */
export default function Seo({
  title,
  description,
  path = '/',
  ogImage = OG_IMAGE,
  jsonLd,
}) {
  const canonical = `${BASE_URL}${path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  // Normalize jsonLd to an array so we can always map
  const ldArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@PrismPawsPetCare" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Page-specific JSON-LD */}
      {ldArray.map((ld, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
}

/**
 * breadcrumb()
 *
 * Helper to build a BreadcrumbList JSON-LD object. Pass an array of
 * [label, path] tuples; the function prepends Home automatically.
 */
export function breadcrumb(items) {
  const all = [['Home', '/'], ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${BASE_URL}${path}`,
    })),
  };
}

/**
 * faqPage(faqs)
 *
 * Helper to build a FAQPage JSON-LD object from an array of { q, a } objects.
 * Google can surface these as rich results in search.
 */
export function faqPage(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
