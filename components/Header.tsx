import * as React from "react";
import NetflixIcon from "./svg/NetflixIcon";
import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MobileMenu from "./MobileMenu";
import { PugaMovie } from "../typing";
import { DocumentData } from "firebase/firestore";
import { Link as LinkScroll } from "react-scroll";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

interface IProps {
  list: PugaMovie[] | DocumentData[];
}

export default function Header({ list }: IProps): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { logout } = useAuth();

  const control = useAnimation();

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
        <MobileMenu list={list} />
        <ul className=" space-x-4 hidden md:flex">
          <LinkScroll to="home" offset={-100} smooth={true} spy={true}>
            <li className="headerLink">Home</li>
          </LinkScroll>
          <LinkScroll to="all" offset={-100} smooth={true} spy={true}>
            <li className="headerLink">TV Shows</li>
          </LinkScroll>

          <LinkScroll to="all" offset={-100} smooth={true} spy={true}>
            <li className="headerLink">Movies</li>
          </LinkScroll>

          <LinkScroll to="all" offset={-100} smooth={true} spy={true}>
            <li className="headerLink">New & Popular</li>
          </LinkScroll>
          <LinkScroll to="myList" offset={-100} smooth={true} spy={true}>
            {list.length > 0 && <li className="headerLink">My List</li>}
          </LinkScroll>
        </ul>
      </div>
      <div className=" flex items-center space-x-4 text-sm cursor-pointer">
        <Toaster position="top-right" />
        <SearchIcon
          onClick={() => {
            toast(`not usable😞`, {
              duration: 2000,
              style: {
                backgroundColor: "black",
                color: "white",
              },
            });
          }}
          className="w-6 h-6 cursor-pointer hidden sm:inline fill-[#e5e5e5] hover:fill-[#b3b3b3] tr"
        />
        <p className="hidden lg:inline cursor-pointer hover:text-slate-300 tr">
          Kids
        </p>
        <motion.div
          initial={{ rotate: 0 }}
          animate={control}
          onClick={() => {
            control.start({
              rotate: [0, -30, 30, 0],
            });
          }}
        >
          <BellIcon className="w-6 h-6 cursor-pointer fill-[#e5e5e5] hover:fill-[#b3b3b3] tr " />
        </motion.div>
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
