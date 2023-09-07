"use client";

import { Content } from "@/app/ts/types";
import { useEffect } from "react";
import slugify from "slugify";

const slugifyOptions = { lower: true };
const scrollMargin = 200;

type Title = {
  tag: string;
  text: string;
};

export const extractTitles = (content: Content[]): Title[] => {
  if (!content) {
    return [];
  }

  const titles = content.reduce((accumulator: Title[], el) => {
    if (el.type === "h2" || el.type === "h3") {
      const children = el.props.children;
      const text = typeof children === "string" ? children : "";

      accumulator.push({
        tag: el.type,
        text: text,
      });
    }

    return accumulator;
  }, []);

  return titles;
};

const TableOfContents = ({ content }: { content: Content[] }) => {
  const titles = extractTitles(content);

  useEffect(() => {
    if (!titles.length) {
      return;
    }

    const nav = document.getElementById("tableOfContents") as HTMLElement;
    const headings = document.querySelectorAll("article h2, article h3");
    const listOfAnchors = nav.querySelectorAll(".article-anchors li");
    let current: Element | null;

    const clickHandler = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLElement;

      if (target.tagName === "A") {
        const targetId = target.getAttribute("href")?.slice(1);
        if (targetId) {
          const targetElement = [...headings].find(
            (el) => slugify(el.textContent || "", slugifyOptions) === targetId
          );

          if (targetElement) {
            const targetRect = targetElement.getBoundingClientRect();
            const scrollOffset = targetRect.top + window.scrollY;
            const scrollToPosition = scrollOffset - scrollMargin;

            window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
          }
        }
      }
    };

    const observerHandler = (entries: Array<IntersectionObserverEntry>) => {
      entries.forEach((entry) => {
        const { isIntersecting, target } = entry;
        const slug = slugify(target.textContent || "", slugifyOptions);

        const anchorItem = document.querySelector(
          `.article-anchors li > a[href='#${slug}']`
        );

        listOfAnchors.forEach((anchor) => anchor.classList.remove("active"));

        if (isIntersecting) {
          current = anchorItem;
        }

        if (current) {
          const linkParent = current.parentElement;
          linkParent?.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerHandler, {
      rootMargin: "-22% 0px -70% 0px",
      threshold: 0,
    });

    headings.forEach((el) => observer.observe(el));
    nav.addEventListener("click", clickHandler);

    return () => {
      observer.disconnect();
      nav.removeEventListener("click", clickHandler);
    };
  }, [titles]);

  return (
    <>
      {titles.length !== 0 && (
        <nav
          id="tableOfContents"
          className="max-h-[80vh] overflow-y-auto mb-15 lg:px-5 lg:py-6 lg:bg-gray-100 lg:rounded-lg lg:sticky lg:top-24 lg:mb-0"
        >
          <h2 className="font-sans text-2xl font-bold text-green mb-3 md:text-4xl">
            Spis treści
          </h2>

          <ul className="article-anchors pl-5">
            {titles.map(({ tag, text }, index) => {
              const slug = slugify(text, slugifyOptions);

              return (
                <li
                  key={index}
                  className={`relative font-sans text-base font-normal text-black ${
                    tag === "h3"
                      ? "pl-3 md:pl-4 before:content-['-'] before:absolute before:-left-0.5"
                      : "md:text-lg before:content-['•'] before:absolute before:-top-px before:-left-4"
                  }`}
                >
                  <a href={`#${slug}`}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default TableOfContents;
