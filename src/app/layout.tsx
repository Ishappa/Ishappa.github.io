import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const description =
  "Ishappa N is a Software Engineer in Bengaluru focused on mobile and frontend — React Native apps on the App Store and Play Store, and Next.js e-commerce storefronts serving 1M+ monthly users.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Software Engineer, Mobile & Frontend`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Ishappa N",
    "Software Engineer",
    "React Native Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Mobile Developer",
    "TypeScript",
    "E-commerce",
    "Bengaluru",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — Software Engineer, Mobile & Frontend`,
    description,
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer, Mobile & Frontend`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
  ],
};

/** Claims here are limited to what the resume supports. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Engineer",
  email: `mailto:${profile.contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Codilar Technologies Pvt Ltd" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Dr. T Thimmaiah Institute of Technology, KGF",
  },
  knowsAbout: [
    "React Native",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Mobile application development",
    "E-commerce",
    "Web performance",
    "REST APIs",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <noscript>
          {/* Content must never depend on JavaScript to become visible. */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
