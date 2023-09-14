import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { Chevron } from "../../svg/Icons";
import { usePathname } from "next/navigation";

type Props = {
  links: {
    title: string;
    slug: string;
  }[];
  activeLink: string;
  title: string;
  parentSlug: string;
};

const Children = ({ links, activeLink, parentSlug, title }: Props) => {
  const pathname = usePathname();

  const [isNavigate, setIsNavigate] = useState<boolean>(false);
  const listWrapper = useRef<HTMLDivElement>(null!);

  const mouseEnter = () => {
    setIsNavigate(true);
  };
  const mouseLeave = () => {
    setIsNavigate(false);
  };

  useEffect(() => {
    listWrapper.current.classList.remove("invisible");
  }, [isNavigate]);

  return (
    <>
      <div
        className="relative w-full h-full link-hover"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <p className="relative flex items-center cursor-default">
          <Chevron
            className={`w-5 h-5 transition duration-300 ${
              isNavigate ? "rotate-180" : "rotate-0"
            }`}
          />
          {title}
        </p>

        <div
          ref={listWrapper}
          className={`absolute top-0 w-full mt-6 pt-4 invisible ${
            isNavigate ? "active" : "no-active"
          }`}
        >
          <ul className={`py-2 w-max bg-white shadow-default rounded-md`}>
            {links.map(({ title, slug }) => {
              const isActive = pathname === `/${parentSlug}/${slug}`;
              const activeLink = isActive ? "text-green" : "text-black";

              return (
                <li
                  key={slug}
                  className={`${activeLink} font-sans font-normal text-base`}
                >
                  <Link
                    href={`/${parentSlug}/${slug}`}
                    className="inline-block py-1.5 px-6 link-hover"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}

            <li
              key="wszystkie"
              className={`${activeLink} font-sans font-bold text-base`}
            >
              <Link
                href={`/${parentSlug}`}
                className={`inline-block py-1.5 px-6 link-hover ${
                  pathname === `/${parentSlug}` ? "text-green" : "text-black"
                }`}
              >
                Wszystkie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Children;
