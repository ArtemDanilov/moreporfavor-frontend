"use client";

import { useEffect } from "react";
import slugify from "slugify";

const ArticleNavigation = ({ titles }: { titles: string[] }) => {
  useEffect(() => {
    const articleSegments = document.querySelectorAll("article[id]");
    const listOfAnchors = document.querySelectorAll(".article-anchors li");
    const scrollMargin = 200;
    let current: Element | null;

    const clickHandler = () => {
      listOfAnchors.forEach((anchor) => {
        const link = anchor.lastChild as HTMLElement;

        link?.addEventListener("click", (e) => {
          e.preventDefault();

          const targetId = link.getAttribute("href")?.slice(1);

          if (targetId) {
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
              const targetRect = targetElement.getBoundingClientRect();
              const scrollOffset = targetRect.top + window.scrollY;
              const scrollToPosition = scrollOffset - scrollMargin;

              window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
            }
          }
        });
      });
    };

    const observerHandler = (entries: Array<IntersectionObserverEntry>) => {
      entries.forEach((entry) => {
        const { isIntersecting, target } = entry;
        const id = target.getAttribute("id");
        const anchorItem = document.querySelector(
          `.article-anchors li > a[href='#${id}']`
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
      rootMargin: "-30% 0px -70% 0px",
      threshold: 0,
    });

    articleSegments.forEach((el) => observer.observe(el));
    clickHandler();
  }, []);

  return (
    <nav className="mb-15 lg:px-5 lg:py-6 lg:bg-gray-100 lg:rounded-lg lg:sticky lg:top-24 lg:mb-0">
      <h2 className="font-sans text-2xl font-bold text-green mb-3 md:text-4xl">
        Spis treści
      </h2>

      <ul className="article-anchors list-disc pl-5">
        {titles.map((title, index) => {
          const slug = slugify(title, { lower: true });

          return (
            <li
              key={index}
              className="font-sans text-base font-normal text-black md:text-lg"
            >
              <a href={`#${slug}`}>{title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ArticleNavigation;
