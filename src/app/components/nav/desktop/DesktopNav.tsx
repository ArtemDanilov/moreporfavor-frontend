"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Children from "./Children";
import { Chevron } from "../../svg/Icons";

import { TLink } from "../../../ts/types";

const Nav = ({ links }: { links: TLink[] }) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block">
      <nav className="relative">
        <ul className="flex">
          {links.map(({ id, title, slug, children }) => {
            const isActive = pathname.startsWith(`/${slug}`);
            const activeLink = isActive ? "text-green" : "text-black";
            const parentSlug = slug;

            return (
              <li
                key={id}
                className={`${activeLink} relative parent-link link-hover font-sans text-base font-normal py-1 px-2`}
              >
                {children ? (
                  <>
                    <p className="relative flex items-center cursor-default">
                      <Chevron className="chevron w-5 h-5 transition-all duration-300" />
                      {title}
                    </p>

                    <Children
                      parentSlug={parentSlug}
                      links={children}
                      activeLink={activeLink}
                    />
                  </>
                ) : (
                  <Link href={`/${slug}`} className="link-hover">
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
