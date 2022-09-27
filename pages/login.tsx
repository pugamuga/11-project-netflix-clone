import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import NetflixIcon from "../components/svg/NetflixIcon";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

export default function login() {
  const [passIsView, setPassIsView] = useState<boolean>(false);
  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center
    md:justify-center md:bg-transparent"
    >
      <Head>
        <title>Pugaflix login</title>

        <link rel="icon" href="..//favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <div className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 tr">
        <NetflixIcon />
      </div>
      <form
      onClick={(e) => {
        e.preventDefault()
      }}
        className=" relative mt-24 space-y-8 rounded bg-black/75 py-10 px-12 md:mt-0
      md:w-[420px] md:px-14"
      >
        <h1 className=" text-3xl">Sign In</h1>
        <div className=" space-y-4 flex flex-col">
          <label>
            <input type="email" placeholder="Email" className=" input " />
          </label>
          <label className="relative">
            <input
              type={passIsView ? "text" : "password"}
              placeholder="Password"
              className=" input"
            />
            {passIsView?<EyeIcon  onClick={() => {
             setPassIsView((prev:boolean) => {
                return !prev
             })   
            }} className="w-5 h-5 absolute top-0 bottom-0 my-auto right-5" />:
            <EyeOffIcon onClick={() => {
             setPassIsView((prev:boolean) => {
                return !prev
             })   
            }} className="w-5 h-5 absolute top-0 bottom-0 my-auto right-5" />}
          </label>
        </div>
        <button type="submit" className=" w-full text-center rounded-sm bg-[#e50913] text-lg pb-2 pt-3">
          Sign In
        </button>
        <div className=" flex space-x-2">
          <h1 className=" text-white/40">New to Netflix?</h1>
          <button className="hover:underline">Sign Up Now</button>
        </div>
      </form>
    </div>
  );
}
