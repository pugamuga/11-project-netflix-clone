import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import Membership from "../components/Membership";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import payments from "../lib/stripe";

interface IProps {
  products: Product[];
}

export default function account({ products }: any): JSX.Element {
  const { user, logout } = useAuth();
  const subscription = useSubscription(user);
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
      <main className="pt-24 mx-auto max-w-6xl tr pb-12 px-5 md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className=" text-3xl md:text-4xl">Account</h1>
          <div className="flex items-center gap-x-1">
            <img src="https://rb.gy/4vfk4r" alt="" className="w-8 h-8" />
            <p className="text-xs text-[#555]">
              Member since: {subscription?.created}
            </p>
          </div>
        </div>
        <Membership />
        <div className="accRow">
          <h1>Plan Details</h1>
          <div>
            {
              products.filter(
                (pr: Product) => pr.id === subscription?.product
              )[0]?.name
            }
          </div>
          <p className=" cursor-pointer text-blue-500 hover:underline md:text-right">
            Change plan
          </p>
        </div>
        <div className="accRow">
          <h1>Settings</h1>
          <p
          onClick={logout}
          className=" col-span-3 cursor-pointer text-blue-500 hover:underline ">
            Sign Out of all devices
          </p>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message));

  return {
    props: {
      products,
    },
  };
};
