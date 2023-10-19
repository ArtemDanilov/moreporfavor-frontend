"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { LongArrow } from "../svg/Icons";

import "./style.scss";

type Props = {
  pages: number;
};

const Pagination = ({ pages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const pagesCount = Array.from({ length: pages }).map((_, i) => i + 1);

  const nextPage = currentPage === pages ? pages : currentPage + 1;
  const prevPage = currentPage === 1 ? 1 : currentPage - 1;
  const isPrevActive = currentPage === 1;
  const isNextActive = currentPage === pages;

  return (
    <div className="pagination mt-8 flex justify-center items-center lg:mt-20">
      <Link
        href={{
          pathname: pathname,
          query: { page: prevPage },
        }}
        className={`prev ${isPrevActive ? "disabled" : ""}`}
      >
        <LongArrow className="arrow rotate-180" />
      </Link>
      <div>
        {pagesCount.map((page) => {
          const isPageActive = currentPage === page;

          return (
            <Link
              key={page}
              href={`${pathname}?page=${page}`}
              className={`font-display font-normal text-lg px-2 py-1 ${
                isPageActive
                  ? "text-gray-200 pointer-events-none"
                  : "text-green"
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>
      <Link
        href={{
          pathname: pathname,
          query: { page: nextPage },
        }}
        className={`next ${isNextActive ? "disabled" : ""}`}
      >
        <LongArrow className="arrow" />
      </Link>
    </div>
  );
};

export default Pagination;
