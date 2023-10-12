import { abril, nunito } from "./fonts";
import NextTopLoader from "nextjs-toploader";

import "./style/globals.scss";

import Header from "./layout/header";
import Footer from "./layout/footer";
import CookieWindow from "./components/cookie/CookieWindow";
import CookieConsent from "./components/GoogleAnalytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = process.env.NEXT_PUBLIC_MODE === "production";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${abril.variable} ${nunito.variable}`}
    >
      <body>
        {isProduction && <CookieConsent />}

        <NextTopLoader
          color="#FF8B5C"
          initialPosition={0.08}
          height={3}
          easing="ease"
          speed={600}
          showSpinner={false}
        />

        <Header />
        <main className="mb-12 md:mb-0">{children}</main>
        <Footer />

        {isProduction && <CookieWindow />}
      </body>
    </html>
  );
}
