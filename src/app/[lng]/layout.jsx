import Footer from "@/src/components/layouts/footer/Footer";
import NavBar from "@/src/components/layouts/navbar/NavBar";
import config from "@config/index";
import { cx } from "@lib/index";
import { dir } from "i18next";
import { Cairo, Inter } from "next/font/google";
import "../globals.css";
import { languages } from "../i18n/settings";

async function sharedMetaData(params) {
  return {
    title: {
      default: config?.title || "",
      template: "%s | TGC",
    },
    description: config?.description || "TGC - A blog for the TGC community.",
    metadataBase: new URL("https://acme.com"),

    keywords: ["TGC Group", "TGC", "best Beauty product"],
    authors: [{ name: "Ibrahim Sifat" }],
    canonical: config?.siteUrl,
    openGraph: {
      images: [
        {
          url: config?.siteImageUrl || "/img/opengraph.jpg",
          width: 800,
          height: 600,
        },
      ],
    },
    alternates: {
      canonical: "/",
    },
    twitter: {
      title: config?.title || "TGC Template",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
});

// internationalization

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={cx(cairo.variable)}>
        <NavBar lng={lng} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
