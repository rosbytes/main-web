// use only next/link and next/router in next revision, in short keep is server side component
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import headerRos from "@public/headerRos.svg";
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About R.O.S",
    path: "/about",
  },
  { name: "Join Us", path: "/join" },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white  ">
      <nav className="flex justify-center items-center py-4">
        <div className="flex items-center gap-10">
          {navLinks.slice(0, 2).map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`font-medium pb-1 border-b-2 transition-colors duration-200 ${
                pathname === nav.path
                  ? ""
                  : "border-transparent text-gray-900 hover:text-purple-700"
              }${
                pathname === nav.path ? " text-[#993487] border-[#993487]" : ""
              }`}
            >
              {nav.name}
            </Link>
          ))}

          <Image
            src={headerRos}
            alt="ROS LOGO"
            className="h-10 w-10"
            width={40}
            height={40}
          />

          {navLinks.slice(2).map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`font-medium pb-1 transition-colors duration-200 ${
                pathname === nav.path
                  ? "border-b-2"
                  : "text-gray-900 hover:text-purple-700"
              }`}
              style={
                pathname === nav.path
                  ? { color: "#993487", borderColor: "#993487" }
                  : {}
              }
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
