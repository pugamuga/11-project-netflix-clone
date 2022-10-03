import * as React from "react";
import NetflixIcon from "./svg/NetflixIcon";
import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { logout } = useAuth();

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
      <div className=" flex items-center space-x-2 md:space-x-10 lg:origin-top-left lg:scale-150 tr ">
        <NetflixIcon />
        <ul className=" space-x-4 hidden md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className=" flex items-center space-x-4 text-sm cursor-pointer">
        <SearchIcon className="w-6 h-6 cursor-pointer hidden sm:inline fill-[#e5e5e5] hover:fill-[#b3b3b3] tr" />
        <p className="hidden lg:inline cursor-pointer hover:text-slate-300 tr">
          Kids
        </p>
        <BellIcon className="w-6 h-6 cursor-pointer fill-[#e5e5e5] hover:fill-[#b3b3b3] tr " />
        <Link href="/account" className="!cursor-pointer">
        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className=" !cursor-pointer rounded hover:opacity-90 tr"
        />
        </Link>
      </div>
    </header>
  );
}
