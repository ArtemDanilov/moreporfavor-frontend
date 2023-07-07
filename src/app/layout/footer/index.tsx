import Link from "next/link";

import Background from "./Background";
import { fetchLinks } from "@/app/api/links";
import SocialMedia from "@/app/components/SocialMedia";
import Section from "@/app/components/Section";
import Logo from "@/app/components/Logo";

const Footer = async () => {
  const links = await fetchLinks();

  return (
    <footer className="prlx-container relative max-w-8xl mx-auto overflow-hidden">
      <Background />

      <div className="container absolute absolute-x-centered bottom-0 z-[60] pb-3 md:pb-8">
        <Logo className="w-[7.25rem] h-12 mb-4 md:w-[8.75rem] md:h-[3.625rem] md:mx-auto lg:mb-6" />

        <div className="flex items-end justify-between mb-9 md:flex-col md:justify-center">
          <ul className="md:space-x-4 md:mx-auto md:mb-4 lg:mb-8">
            {links.map(({ id, attributes }) => {
              const { link_name, link_url } = attributes;

              return (
                <li
                  key={id}
                  className="font-sans font-bold text-base text-white text-left md:text-xl md:inline"
                >
                  <Link href={link_url}>{link_name}</Link>
                </li>
              );
            })}
          </ul>

          <SocialMedia className="flex justify-end space-x-4 text-xs text-white md:mx-auto" />
        </div>

        <p className="font-sans font-normal text-xs text-white text-center md:hidden">
          © 2023 Moreporfavor. All rights reserved.
        </p>
      </div>

      <p className="hidden font-sans font-normal text-xs text-black text-center py-4 md:block">
        © 2023 Moreporfavor. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
