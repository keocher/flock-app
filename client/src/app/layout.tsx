import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flock",
  description: "A social platform for students to connect and share.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ Global Toaster (matches overall theme, soft modern aesthetic) */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#fff", // soft white background
              color: "#2e2e2e", // deep neutral text
              borderRadius: "10px",
              padding: "14px 18px",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08), 0 0 10px rgba(102,140,74,0.1)", // subtle glow from flockgreen
              fontSize: "0.9rem",
              fontWeight: 500,
            },
            success: {
              iconTheme: {
                primary: "#6ea75b", // soft modern green
                secondary: "#fff",
              },
              style: {
                background: "#ecf8ef", // pastel greenish background
                color: "#294f2d", // dark green text
              },
            },
            error: {
              iconTheme: {
                primary: "#e74c3c", // modern coral red
                secondary: "#fff",
              },
              style: {
                background: "#fdecea", // soft red background
                color: "#611a15",
              },
            },
          }}
        />
      </body>
    </html>
  );
}