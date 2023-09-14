"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { TLink } from "../../../ts/types";
import Children from "./Children";

const Nav = ({ links }: { links: TLink[] }) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block">
      <nav className="relative">
        <ul className="flex">
          {links.map(({ id, title, slug, children }) => {
            const isActive = pathname.startsWith(slug);
            const activeLink = isActive ? "text-green" : "text-black";
            const parentSlug = slug;

            return (
              <li
                key={id}
                className={`${activeLink} font-sans text-base font-normal py-1 px-2 hover:text-green transition duration-300`}
              >
                {children ? (
                  <Children
                    title={title}
                    parentSlug={parentSlug}
                    links={children}
                    activeLink={activeLink}
                  />
                ) : (
                  <Link href={`/${slug}`}>{title}</Link>
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
