import Logo from "../logo";
import { MobileNav } from "../mobile-nav";
import Link from "next/link";

const PrimarySiteNav = () => {
  return (
    <nav className="container px-8 mx-auto max-w-screen-lg xl:px-5 py-6 lg:py-8">
      <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-14">
        <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
          <Link
            href={"/"}
            className="px-5 py-2 text-base font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
          >
            Home
          </Link>
        </div>
        <div className="flex w-full items-center justify-between md:w-auto">
          <Logo className="w-8 md:w-10" />
          <MobileNav />
        </div>
        <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
          <Link
            href={"/blog"}
            className="px-5 py-2 text-base font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
          >
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PrimarySiteNav;
