"use client";
import Link from "next/link";
import { ModeToggle } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

const NAVIGATION = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between py-10 items-center ">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">
          IMRAN<span className="text-primary">KHANI</span>
        </h1>{" "}
      </Link>
      <ul className="flex gap-5 font-bold text-lg ">
        {NAVIGATION.map((nav) => {
          const isActive =
            pathname.includes(nav.path) &&
            (pathname === "/" || pathname === nav.path);
          return (
            <Link
              className={`${isActive ? "text-primary" : "text-gray-900 dark:text-white"}`}
              key={nav.name}
              href={nav.path}
            >
              {nav.name}
            </Link>
          );
        })}
      </ul>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
