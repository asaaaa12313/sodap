import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google"; // Keep fonts
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import { locationData } from "@/data/location";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${locationData.name} - 창원 소답동 맛집`,
    template: `%s | ${locationData.name}`,
  },
  description: "세계 3대 명품 돼지고기 스페인 듀록과 20일 침지숙성의 만남. 창원 소답동, 중동 유니시티 인근 최고의 고기집.",
  keywords: ["창원맛집", "소답동맛집", "창원중동맛집", "유니시티맛집", "창원고기집", "침지숙성", "맛있는고기에솜씨를더하다"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: locationData.name,
    description: "침지숙성 프리미엄 돼지고기 전문점",
    url: "https://sodap-meats.vercel.app", // Conceptual URL
    siteName: locationData.name,
    images: [
      {
        url: "/images/hero/hero-bg.jpg", // OG Image
        width: 1200,
        height: 630,
        alt: locationData.name,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
