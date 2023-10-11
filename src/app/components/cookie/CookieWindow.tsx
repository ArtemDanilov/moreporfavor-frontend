"use client";

import { useEffect, useRef, useState } from "react";

import CookieConsent from "react-cookie-consent";
import { getCookie } from "@/app/helpers/cookie";

import "./style.scss";

const CookieWindow = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState<boolean>(false);
  const cookieContainer = useRef<HTMLDivElement | null>(null);

  const hide = () => {
    if (cookieContainer.current) {
      cookieContainer.current.classList.replace("show", "hide");
    }
  };

  useEffect(() => {
    const cookieConsent = getCookie("CookieConsent") === "agree";

    setIsCookieAccepted(cookieConsent);
  }, []);

  return (
    <>
      {!isCookieAccepted && (
        <div
          ref={cookieContainer}
          className="fixed bottom-0 z-[999] cookie-container show"
        >
          <CookieConsent
            location="bottom"
            buttonText="Zgadzam się"
            hideOnAccept={false}
            onAccept={hide}
            enableDeclineButton
            declineButtonText="Odmawiam"
            hideOnDecline={false}
            onDecline={hide}
            cookieName="CookieConsent"
            cookieValue="agree"
            disableStyles={true}
            containerClasses="bg-white p-6 border-t border-gray-200"
            buttonWrapperClasses="w-full flex justify-center mt-4 md:justify-end md:mt-2"
            buttonClasses="font-sans font-normal text-sm text-black bg-[#fcd342] rounded-md py-2 px-4"
            expires={150}
            declineButtonClasses="font-sans font-normal text-sm text-gray-400 bg-white rounded-md py-2 px-4 mr-2"
          >
            <p className="font-sans font-normal text-xs md:text-sm">
              Ta strona internetowa wykorzystuje pliki cookie w celu zbierania
              informacji o użytkownikach za pośrednictwem narzędzia Google
              Analytics. Te informacje pomagają nam lepiej zrozumieć zachowanie
              odwiedzających i doskonalić naszą stronę. Pliki cookie
              wykorzystywane przez Google Analytics zawierają anonimowe dane,
              takie jak adresy IP użytkowników i informacje o ich nawigacji na
              stronie. Te informacje są przetwarzane przez Google i dostarczane
              nam w formie raportów analitycznych, które pomagają nam
              zidentyfikować, które strony są bardziej lub mniej popularne.
              Wyrażenie zgody na korzystanie z plików cookie jest dobrowolne,
              jednak zachęcamy do jej zaakceptowania, aby pomóc nam ulepszać
              naszą witrynę dla ciebie.
            </p>
          </CookieConsent>
        </div>
      )}
    </>
  );
};

export default CookieWindow;
