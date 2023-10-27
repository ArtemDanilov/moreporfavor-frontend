import { Metadata } from "next";
import Link from "next/link";
import NotFound404 from "./components/svg/404";

export const metadata: Metadata = {
  title: "Error 404",
  description: "Page not found",
};

const NotFound = () => {
  return (
    <div className="flex justify-center items-center mt-40 mb-20 lg:mt-52">
      <div>
        <NotFound404 className="w-[18.75rem] h-auto mx-auto mb-8 sm:w-[25rem] xl:w-[35rem]" />
        <p className="font-sans font-normal text-base text-black text-center px-8 xl:text-xl">
          Ups...wygląda na to że ta strona nie istnieje, <br />
          wróć na
          <Link href="/" className="text-mocha">
            główną stronę
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
