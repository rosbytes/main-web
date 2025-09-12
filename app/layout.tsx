import Header from "@components/Header";
import localFont from "next/font/local";
import "./globals.css";

const apercu = localFont({
  src: "../public/fonts/apercu_regular_pro.ttf",
  variable: "--font-apercu",
});

const capcut = localFont({
  src: "../public/fonts/capcut.ttf",
  variable: "--font-capcut",
});

const montagu = localFont({
  src: "../public/fonts/MontaguSlab.ttf",
  variable: "--font-montagu",
});

const roquen = localFont({
  src: "../public/fonts/RoquenDEMO.ttf",
  variable: "--font-roquen",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${apercu.variable} ${capcut.variable} ${montagu.variable} ${roquen.variable}`}
      lang="en"
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
