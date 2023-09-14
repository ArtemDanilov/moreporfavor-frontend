"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { TLink } from "@/app/ts/types";

import collapseAllLinks from "./collapseAllLinks";

import { MenuButton } from "../../svg/Icons";
import SocialMedia from "../../SocialMedia";
import CloseBtn from "../../CloseBtn";
import Children from "./Children";

const Nav = ({ links }: { links: TLink[] }) => {
  const pathname = usePathname();

  const [menu, setMenu] = useState<boolean>(false);

  const overlay = useRef<HTMLDivElement>(null!);
  const navMenu = useRef<HTMLDivElement>(null!);

  const openMenu = () => {
    setMenu(true);

    document.body.classList.add("overflow-hidden");
    overlay.current.classList.remove("hidden", "overlay-hidden");
    overlay.current.classList.add("overlay-active");
  };

  const closeMenu = () => {
    setMenu(false);
    collapseAllLinks();

    document.body.classList.remove("overflow-hidden");
    overlay.current.classList.add("overlay-hidden");
    overlay.current.classList.remove("overlay-active");
    setTimeout(() => overlay.current.classList.add("hidden"), 300);
  };

  const menuClass: string = menu ? "translate-x-0" : "translate-x-full";

  useEffect(() => {
    navMenu.current.classList.remove("transition-prevent");
  }, [navMenu, menu]);

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
        ref={navMenu}
        className={`fixed top-0 right-0 w-screen h-[100dvh] bg-white transition transition-prevent duration-300 ease-out md:w-1/2 ${menuClass}`}
      >
        <CloseBtn onClick={closeMenu} />

        <ul className="mt-32 w-full px-5 space-y-4 overflow-y-auto h-[calc(100dvh-4rem-8rem)]">
          {links.map(({ id, title, slug, children }) => {
            const isActive = pathname.startsWith(slug);
            const activeLink = isActive ? "text-green" : "text-black";
            const parentSlug = slug;

            return (
              <li
                key={id}
                className={`${activeLink} font-sans font-bold text-5xl text-right`}
              >
                {children ? (
                  <Children
                    links={children}
                    parentSlug={parentSlug}
                    activeLink={activeLink}
                    buttonLabel={title}
                    onClick={closeMenu}
                  />
                ) : (
                  <Link href={`/${parentSlug}`} onClick={closeMenu}>
                    {title}
                  </Link>
                )}
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
