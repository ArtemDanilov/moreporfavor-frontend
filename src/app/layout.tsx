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
      </body>
    </html>
  );
}
