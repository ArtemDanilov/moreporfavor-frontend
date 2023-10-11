import Script from "next/script";

import { abril, nunito } from "./fonts";
import "./style/globals.scss";

import NextTopLoader from "nextjs-toploader";
import Header from "./layout/header";
import Footer from "./layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${abril.variable} ${nunito.variable}`}>
      <body>
        {process.env.NEXT_PUBLIC_MODE === "production" && (
          <Script id="google-analytics">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');`}
          </Script>
        )}

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

        {process.env.NEXT_PUBLIC_MODE === "production" && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
      </body>
    </html>
  );
}
