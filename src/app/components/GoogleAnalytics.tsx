"use client";

import { useEffect, useState } from "react";

import Script from "next/script";
import { getCookie } from "@/app/helpers/cookie";

const CookieConsent = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState<boolean>(false);
  const GA_ID = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    const cookieConsent = getCookie("CookieConsent") === "agree";

    setIsCookieAccepted(cookieConsent);
  }, []);

  return (
    <>
      {isCookieAccepted && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', "${GA_ID}");
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default CookieConsent;
