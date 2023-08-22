"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LongArrow } from "../svg/Icons";

import "./style.scss";

type Props = {
  pages: number;
  currentPage: number;
};

const Pagination = ({ pages, currentPage }: Props) => {
  const pathname = usePathname();

  const pagesCount = Array.from({ length: pages }).map((_, i) => i + 1);

  const nextPage = currentPage === pages ? pages : currentPage + 1;
  const prevPage = currentPage === 1 ? 1 : currentPage - 1;

  return (
    <div className="pagination mt-8 flex justify-center items-center lg:mt-20">
      <Link
        href={`${pathname}?page=${prevPage}`}
        className={`prev ${currentPage === 1 && "disabled"}`}
      >
        <LongArrow className="arrow rotate-180" />
      </Link>
      <div>
        {pagesCount.map((page) => (
          <Link
            key={page}
            href={`${pathname}?page=${page}`}
            className={`font-display font-normal text-lg px-2 py-1 ${
              currentPage === page
                ? "text-gray-200 pointer-events-none"
                : "text-green"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
      <Link
        href={`${pathname}?page=${nextPage}`}
        className={`next ${currentPage === pages && "disabled"}`}
      >
        <LongArrow className="arrow" />
      </Link>
    </div>
  );
};

export default Pagination;
