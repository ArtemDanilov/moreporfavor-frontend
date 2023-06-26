"use client";

import { usePathname } from "next/navigation";

import { typeLink } from "../../ts/types";

import Link from "next/link";

const Nav = ({ links }: { links: typeLink[] }) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block">
      <nav>
        <ul className="flex">
          {links.map(({ id, attributes }) => {
            const { link_name, link_url } = attributes;

            const isActive = pathname.startsWith(link_url);
            const activeLink = isActive ? "text-green" : "text-black";

            return (
              <li
                key={id}
                className={`${activeLink} font-sans text-base font-normal py-1 px-2`}
              >
                <Link href={link_url}>{link_name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
