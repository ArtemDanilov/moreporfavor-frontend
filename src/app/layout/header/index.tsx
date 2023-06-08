import Link from "next/link";

import { fetchLinks } from "../../api/links";

import { Magnifier, Sun } from "@/app/components/icons/Icons";
import Logo from "@/app/components/Logo";
import MobileNav from "@/app/components/nav/MobileNav";
import DesktopNav from "@/app/components/nav/DesktopNav";

const Header = async () => {
  const links = await fetchLinks();

  return (
    <header className="max-w-8xl fixed absolute-x-centered top-0 z-50 w-full py-4 px-5 bg-white flex items-center justify-between xl:px-20">
      <h1>
        <Link href="/">
          <span className="sr-only">Moreporfavor Logo</span>
          <Logo width={140} height={58} />
        </Link>
      </h1>

      <DesktopNav links={links} />

      <div className="flex items-center space-x-4">
        <Magnifier width={24} height={24} />
        <Sun width={24} height={24} />
        <MobileNav links={links} />
      </div>
    </header>
  );
};

export default Header;
