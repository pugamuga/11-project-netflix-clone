import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import Membership from "../components/Membership";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";

export default function account(): JSX.Element {
  const {user} = useAuth()
  const subscription = useSubscription(user)
  return (
    <div>
      <Head>
        <title>Account Settings</title>

        <link rel="icon" href="..//favicon.ico" />
      </Head>
      <header className="bg-[#141414]">
        <Link href={"/"}>
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href={"/account"}>
          <img src="https://rb.gy/g1pwyx" className="cursor-pointer rounded" />
        </Link>
      </header>
      <main className="pt-24">
        <div>
          <h1 className=" text-3xl md:text-4xl">Account</h1>
          <div className="flex items-center gap-x-1">
            <img src="https://rb.gy/4vfk4r" alt="" className="w-8 h-8"/>
            <p className="text-xs text-[#555]">Member since:  {subscription?.created}</p>
          </div>
        </div>
        <Membership/>
      </main>
    </div>
  );
}
