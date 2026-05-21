import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Prism Paws Pet Care';
const BASE_URL  = 'https://www.yourpetsfavoritehuman.com';
const OG_IMAGE  = `${BASE_URL}/assets/images/PRISM_PAWS_LOGO.png`;

export default function Seo({ title, description, path = '/', ogImage = OG_IMAGE }) {
  const canonical = `${BASE_URL}${path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:image"       content={ogImage} />

      {/* Twitter card */}
      <meta name="twitter:card"        content="summary" />
      <meta name="twitter:site"        content="@PrismPawsPetCare" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}
