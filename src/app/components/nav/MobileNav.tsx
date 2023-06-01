"use client";

import "./style.scss";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { MenuButton } from "../icons/Icons";
import SocialMedia from "../SocialMedia";
import CloseBtn from "../CloseBtn";

type Links = {
  title: string;
  url: string;
}[];

const Nav = ({ links }: { links: Links }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const overlay = useRef<HTMLDivElement>(null!);
  const pathname = usePathname();

  const openMenu = () => {
    setMenu(true);
    overlay.current.classList.remove("hidden", "overlay-hidden");
    overlay.current.classList.add("overlay-active");
  };

  const closeMenu = () => {
    setMenu(false);

    overlay.current.classList.add("overlay-hidden");
    overlay.current.classList.remove("overlay-active");
    setTimeout(() => overlay.current.classList.add("hidden"), 300);
  };

  const menuClass: string = menu ? "translate-x-0" : "translate-x-full";

  return (
    <div className="lg:hidden">
      <div
        ref={overlay}
        className="fixed inset-0 w-screen h-screen bg-black bg-opacity-70 transition duration-300 ease-out hidden"
        onClick={closeMenu}
      ></div>

      <button className="w-9 h-9" onClick={openMenu}>
        <span className="sr-only">Menu button</span>
        <MenuButton width={36} height={18} />
      </button>

      <nav
        className={`fixed top-0 right-0 w-screen h-screen bg-white transition duration-300 ease-out md:w-1/2 ${menuClass}`}
      >
        <CloseBtn onClick={closeMenu} />

        <ul className="absolute absolute-y-centered right-0 w-full p-5 space-y-4">
          {links.map(({ title, url }) => {
            const isActive = pathname.startsWith(url);
            const activeLink = isActive ? "text-green" : "text-black";

            return (
              <li
                key={title}
                className={`${activeLink} font-sans font-bold text-5xl text-right`}
              >
                <Link href={url} onClick={closeMenu}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="absolute left-0 bottom-0 w-full bg-green py-4 px-5">
          <SocialMedia classes="text-white" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
