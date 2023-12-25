import Link from "next/link";
import { ModeToggle } from "./ThemeSwitcher";
const Navbar = () => {
  return (
    <div className="flex justify-between py-5">
      <h1 className="text-2xl font-bold">
        IMRAN<span className="text-primary">BLOG</span>
      </h1>
      <ul className="flex gap-5 font-bold text-lg">
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
      </ul>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
