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
    <header className="fixed top-0 left-0 w-full py-4 px-5 flex items-center justify-between">
      <h1>
        <Link href="/">
          <Logo />
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
