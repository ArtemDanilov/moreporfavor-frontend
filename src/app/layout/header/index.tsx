import Link from "next/link";

import { getAllEntries } from "@/app/helpers/getEntries";

import { Magnifier, Sun } from "@/app/components/svg/Icons";
import Logo from "@/app/components/Logo";
import MobileNav from "@/app/components/nav/MobileNav";
import DesktopNav from "@/app/components/nav/DesktopNav";

const Header = async () => {
  const navigation = await getAllEntries("navigation");

  if (!navigation) {
    return;
  }

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full bg-white">
      <div className="max-w-8xl mx-auto py-4 px-5 flex items-center justify-between xl:px-20">
        <h1>
          <Link href="/">
            <span className="sr-only">Moreporfavor Logo</span>
            <Logo className="w-[7.25rem] h-12 md:w-[8.75rem] md:h-[3.625rem]" />
          </Link>
        </h1>

        <DesktopNav links={navigation} />

        <div className="flex items-center space-x-4">
          <Magnifier className="w-6 h-6" />
          <Sun className="w-6 h-6" />
          <MobileNav links={navigation} />
        </div>
      </div>
    </header>
  );
};

export default Header;
