"use client";

import "./style.scss";

import { typeLink } from "../../ts/types";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { MenuButton } from "../svg/Icons";
import SocialMedia from "../SocialMedia";
import CloseBtn from "../CloseBtn";

const Nav = ({ links }: { links: typeLink[] }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const overlay = useRef<HTMLDivElement>(null!);
  const navigation = useRef<HTMLDivElement>(null!);
  const pathname = usePathname();

  const openMenu = () => {
    setMenu(true);

    document.body.classList.add("overflow-hidden");
    overlay.current.classList.remove("hidden", "overlay-hidden");
    overlay.current.classList.add("overlay-active");
  };

  const closeMenu = () => {
    setMenu(false);

    document.body.classList.remove("overflow-hidden");
    overlay.current.classList.add("overlay-hidden");
    overlay.current.classList.remove("overlay-active");
    setTimeout(() => overlay.current.classList.add("hidden"), 300);
  };

  const menuClass: string = menu ? "translate-x-0" : "translate-x-full";

  useEffect(() => {
    navigation.current.classList.remove("transition-prevent");
  }, [navigation, menu]);

  return (
    <div className="lg:hidden">
      <div
        ref={overlay}
        className="fixed inset-0 w-screen h-screen transition duration-300 ease-out hidden md:bg-black md:bg-opacity-70"
        onClick={closeMenu}
      ></div>

      <button className="w-9 h-9" onClick={openMenu}>
        <span className="sr-only">Menu button</span>
        <MenuButton className="w-9 h-[1.125rem]" />
      </button>

      <nav
        ref={navigation}
        className={`fixed top-0 right-0 w-screen h-screen bg-white transition transition-prevent duration-300 ease-out md:w-1/2 ${menuClass}`}
      >
        <CloseBtn onClick={closeMenu} />

        <ul className="absolute absolute-y-centered right-0 w-full p-5 space-y-4">
          {links.map(({ id, attributes }) => {
            const { link_name, link_url } = attributes;

            const isActive = pathname.startsWith(link_url);
            const activeLink = isActive ? "text-green" : "text-black";

            return (
              <li
                key={id}
                className={`${activeLink} font-sans font-bold text-5xl text-right`}
              >
                <Link href={link_url} onClick={closeMenu}>
                  {link_name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="absolute left-0 bottom-0 w-full bg-green py-4 px-5">
          <SocialMedia className="flex justify-end space-x-6 text-white" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
