import type { Metadata } from "next";
import { Caprasimo, Figtree, Fraunces, Noto_Sans_SC, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

// Only for the hero name: its weight reacts to the pointer, so it needs the variable axes.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  subsets: ["latin"],
  weight: "400",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

// Japanese and Chinese fallbacks: not preloaded, the browser only downloads them when those languages are shown.
const zenMaru = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  weight: ["500", "700"],
  preload: false,
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  weight: ["400", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Federico Curto — Web Developer",
  description:
    "Portfolio of Federico Curto — web developer building fast, well-crafted web products with React, Next.js and TypeScript.",
  openGraph: {
    title: "Federico Curto — Web Developer",
    description:
      "Portfolio of Federico Curto — web developer building fast, well-crafted web products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${caprasimo.variable} ${figtree.variable} ${zenMaru.variable} ${notoSansSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
