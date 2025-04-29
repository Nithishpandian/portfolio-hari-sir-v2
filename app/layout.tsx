import type { Metadata } from "next";
import "./globals.css";
import { Oswald, Raleway, Bebas_Neue, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], // You can include as many weights as needed
  variable: "--font-oswald",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Italic support is included automatically
  variable: "--font-raleway",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Italic support is included automatically
  variable: "--font-babas",
});

export const metadata: Metadata = {
  title: "HARIHARA GOPALAN - Portfolio",
  description: "A Portfolio website of HariHara Gopalan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${raleway.variable} ${bebasNeue.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
