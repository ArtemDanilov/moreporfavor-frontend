import Link from "next/link";

import Logo from "@/app/components/Logo";
import { Magnifier, Sun } from "@/app/components/icons/Icons";
import MobileNav from "@/app/components/nav/MobileNav";
import DesktopNav from "@/app/components/nav/DesktopNav";

const navLinks = [
  {
    title: "O mnie",
    url: "/o-mnie",
  },
  {
    title: "Polska",
    url: "/polska",
  },
  {
    title: "Europa",
    url: "/europa",
  },
  {
    title: "Azja",
    url: "/azja",
  },
  {
    title: "Inspiracje",
    url: "/inspiracje",
  },
];

const Header = () => {
  return (
    <header className="max-w-8xl fixed absolute-x-centered top-0 z-50 w-full py-4 px-5 bg-white flex items-center justify-between xl:px-20">
      <h1>
        <Link href="/">
          <span className="sr-only">Moreporfavor Logo</span>
          <Logo width={140} height={58} />
        </Link>
      </h1>

      <DesktopNav links={navLinks} />

      <div className="flex items-center space-x-4">
        <Magnifier width={24} height={24} />
        <Sun width={24} height={24} />
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
};

export default Header;
