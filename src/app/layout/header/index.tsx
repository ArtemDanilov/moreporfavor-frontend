import Link from "next/link";

import { fetchLinks } from "../../api/links";

import { Magnifier, Sun } from "@/app/components/icons/Icons";
import Logo from "@/app/components/Logo";
import MobileNav from "@/app/components/nav/MobileNav";
import DesktopNav from "@/app/components/nav/DesktopNav";

const Header = async () => {
  const links = await fetchLinks();

  return (
    <header className="fixed absolute-x-centered top-0 z-[9999] w-full bg-white">
      <div className="max-w-8xl mx-auto py-4 px-5 flex items-center justify-between xl:px-20">
        <h1>
          <Link href="/">
            <span className="sr-only">Moreporfavor Logo</span>
            <Logo className="w-[7.25rem] h-12 md:w-[8.75rem] md:h-[3.625rem]" />
          </Link>
        </h1>

        <DesktopNav links={links} />

        <div className="flex items-center space-x-4">
          <Magnifier className="w-6 h-6" />
          <Sun className="w-6 h-6" />
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
};

export default Header;
