"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Links = {
  title: string;
  url: string;
}[];

const Nav = ({ links }: { links: Links }) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block">
      <nav>
        <ul className="flex">
          {links.map(({ title, url }) => {
            const isActive = pathname.startsWith(url);
            const activeLink = isActive ? "text-green" : "text-black";

            return (
              <li
                key={title}
                className={`${activeLink} font-sans text-base font-normal py-1 px-2`}
              >
                <Link href={url}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
