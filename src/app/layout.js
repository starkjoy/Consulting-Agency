import { Geist, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Realmer Consulting Agency | International Recruitment & Business Consulting – Ghana",
  description:
    "Realmer Consulting Agency is Ghana’s leading international recruitment and consulting firm, connecting skilled professionals to global jobs. With offices in Accra and Kumasi, we offer expert staffing, overseas job placement, business consulting, and travel & tour services.",
  keywords: [
    "recruitment agency in Ghana",
    "international recruitment",
    "overseas jobs Ghana",
    "business consulting Ghana",
    "Accra recruitment agency",
    "Kumasi recruitment agency",
    "job placement Ghana",
    "travel and tour agency Ghana",
    "Realmer Consulting Agency"
  ],
  openGraph: {
    title: "Realmer Consulting Agency – Global Recruitment & Business Consulting",
    description:
      "Connecting professionals in Ghana and Africa to global job opportunities. Trusted by 130+ companies worldwide.",
    url: "https://realmerconsultingagency.ceo",
    siteName: "Realmer Consulting Agency",
    images: [
      {
        url: "/rcg-default.png",
        width: 1200,
        height: 630,
        alt: "Realmer Consulting Agency preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realmer Consulting Agency",
    description:
      "Leading international recruitment and business consulting firm in Ghana. Explore global job opportunities with Realmer.",
    images: ["/rcg-default.png"],
  },
  metadataBase: new URL("https://realmerconsultingagency.ceo"),
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${interSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
