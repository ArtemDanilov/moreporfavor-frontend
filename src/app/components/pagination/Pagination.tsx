"use client";

import Link from "next/link";
import { LongArrow } from "../svg/Icons";

import "./style.scss";

type Props = {
  category: string;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ category, currentPage, totalPages }: Props) => {
  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  const nextPage = currentPage === totalPages ? totalPages : currentPage + 1;
  const prevPage = currentPage === 1 ? 1 : currentPage - 1;

  return (
    <div className="pagination mt-8 flex justify-center items-center lg:mt-20">
      <Link
        href={`/${category}?page=${prevPage}`}
        className={`prev ${currentPage === 1 && "disabled"}`}
      >
        <LongArrow className="arrow rotate-180" />
      </Link>
      <div>
        {pages.map((page) => (
          <Link
            key={page}
            href={`/${category}?page=${page}`}
            className={`font-display font-normal text-lg px-2 py-1 ${
              currentPage === page
                ? "text-green pointer-events-none"
                : "text-gray-200"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
      <Link
        href={`/${category}?page=${nextPage}`}
        className={`next ${currentPage === totalPages && "disabled"}`}
      >
        <LongArrow className="arrow" />
      </Link>
    </div>
  );
};

export default Pagination;
