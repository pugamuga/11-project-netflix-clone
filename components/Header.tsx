import * as React from "react";
import NetflixIcon from "./svg/NetflixIcon";
import {SearchIcon} from "@heroicons/react/solid"

export default function Header(): JSX.Element {
  return (
    <header>
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
      <div>
        <SearchIcon className="w-12 h-12"/>
      </div>
    </header>
  );
}
