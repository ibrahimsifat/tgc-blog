import Navbar from "@components/layouts/navbar/Navbar";
import config from "@config/index";
import { cx } from "@lib/index";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

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
      languages: {
        "en-US": "/en-US",
        "ar-SA": "/ar-SA",
      },
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

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, lora.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
