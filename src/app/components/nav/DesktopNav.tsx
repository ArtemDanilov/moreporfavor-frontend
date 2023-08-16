"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { TLink } from "../../ts/types";

const Nav = ({ links }: { links: TLink[] }) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block">
      <nav>
        <ul className="flex">
          {links.map(({ id, title, slug }) => {
            const isActive = pathname.startsWith(slug);
            const activeLink = isActive ? "text-green" : "text-black";

            return (
              <li
                key={id}
                className={`${activeLink} font-sans text-base font-normal py-1 px-2`}
              >
                <Link href={`/${slug}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
