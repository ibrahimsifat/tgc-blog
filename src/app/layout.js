import { Inter } from "next/font/google";
import config from "../config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
