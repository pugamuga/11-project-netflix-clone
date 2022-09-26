import * as React from "react";
import NetflixIcon from "./svg/NetflixIcon";
import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className=" flex items-center space-x-2 md:space-x-10">
        <NetflixIcon />
        <ul className=" space-x-4 hidden md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className=" flex items-center space-x-4 text-sm ">
        <SearchIcon className="w-6 h-6 hidden sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className=" cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}
