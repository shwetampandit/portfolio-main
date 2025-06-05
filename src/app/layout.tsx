import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Shweta Pandit | Frontend Developer",
  description:
    "Frontend developer specializing in Vue.js, React.js, TypeScript and Nuxt.js.",
  openGraph: {
    title: "Shweta Pandit | Frontend Developer",
    description:
      "Frontend developer specializing in Vue.js, React.js, TypeScript and Nuxt.js.. Experienced in building scalable, high-performance applications.",
    url: "https://shwetampandit.netlify.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "Shweta Pandit",
    "Frontend Developer",
    "Software Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "GCP",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Web Development",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
