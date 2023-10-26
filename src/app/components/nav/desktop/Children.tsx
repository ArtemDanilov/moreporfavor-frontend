import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  links: {
    title: string;
    slug: string;
  }[];
  activeLink: string;
  parentSlug: string;
};

const Children = ({ links, activeLink, parentSlug }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div className="children-wrapper absolute top-0 w-full pt-10 transition-all duration-300">
        <ul className="children py-2 w-max bg-white shadow-default rounded-md transition-all duration-200">
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
    </>
  );
};

export default Children;
