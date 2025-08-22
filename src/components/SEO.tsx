import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export type SEOProps = {
  title: string;
  description?: string;
  image?: string; // absolute or relative path; will be converted to absolute
  canonical?: string; // absolute url; if not provided, derived from location
  noindex?: boolean;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
};

function toAbsoluteUrl(pathOrUrl: string, origin: string) {
  try {
    // If it's already an absolute URL, this will succeed
    return new URL(pathOrUrl).toString();
  } catch {
    // Otherwise, treat as relative path
    const base = origin || "";
    if (!base) return pathOrUrl; // SSR safety
    return pathOrUrl.startsWith("/") ? `${base}${pathOrUrl}` : `${base}/${pathOrUrl}`;
  }
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  canonical,
  noindex,
  structuredData,
}) => {
  const location = useLocation();
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = canonical || (origin ? `${origin}${location.pathname}` : undefined);
  const absoluteImage = image ? toAbsoluteUrl(image, origin) : undefined;

  const sdArray = Array.isArray(structuredData)
    ? structuredData
    : structuredData
    ? [structuredData]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />} 
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />} 
      {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}

      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* JSON-LD structured data */}
      {sdArray.map((sd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sd) }}
        />
      ))}
    </Helmet>
  );
};
