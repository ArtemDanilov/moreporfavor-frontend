import Link from "next/link";

import { MouseEventHandler, MouseEvent } from "react";

import collapseAllLinks from "./collapseAllLinks";
import { Chevron } from "../../svg/Icons";
import { usePathname } from "next/navigation";

type Props = {
  links: {
    title: string;
    slug: string;
  }[];
  parentSlug: string;
  activeLink: string;
  buttonLabel: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

const Children = ({
  links,
  parentSlug,
  buttonLabel,
  activeLink,
  onClick,
}: Props) => {
  const pathname = usePathname();

  const expandableLink = (e: MouseEvent<HTMLButtonElement>) => {
    const parentLink = e.target as HTMLButtonElement;
    const isExpanded = parentLink.ariaExpanded === "true";
    const listOfLinks = parentLink.nextElementSibling as HTMLUListElement;
    const listHeight = Array.from(listOfLinks.children).reduce((acc, crr) => {
      return acc + crr.clientHeight;
    }, 0);
    const listHeightwithMargin = listHeight + 16;
    if (!isExpanded) {
      collapseAllLinks();

      listOfLinks.style.height = `${listHeightwithMargin}px`;
      parentLink.ariaExpanded = "true";
    } else {
      listOfLinks.style.height = "0px";
      parentLink.ariaExpanded = "false";
    }
  };

  return (
    <>
      <button
        onClick={expandableLink}
        aria-controls={parentSlug}
        aria-expanded="false"
        aria-label="Children links"
        className={`inline-flex items-end ${activeLink}`}
      >
        <Chevron className="w-10 h-10 transition duration-300" />
        {buttonLabel}
      </button>

      <ul
        className="children-list pr-4 overflow-y-hidden transition-all duration-500"
        style={{ height: "0px" }}
        id={parentSlug}
      >
        {links.map(({ title, slug }) => {
          const isActive = pathname === `/${parentSlug}/${slug}`;
          const activeLink = isActive ? "text-green" : "text-black";

          return (
            <li
              key={slug}
              className="font-sans font-normal text-3xl text-right py-1.5 first:mt-4"
            >
              <Link
                href={`/${parentSlug}/${slug}`}
                className={activeLink}
                onClick={onClick}
              >
                {title}
              </Link>
            </li>
          );
        })}

        <li
          key="wszystkie"
          className={`font-sans font-normal text-3xl text-right py-1.5`}
        >
          <Link
            href={`/${parentSlug}`}
            className={
              pathname === `/${parentSlug}` ? "text-green" : "text-black"
            }
            onClick={onClick}
          >
            Wszystkie
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Children;
