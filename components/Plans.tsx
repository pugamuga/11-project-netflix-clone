import { CheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import NetflixIcon from "./svg/NetflixIcon";
import Table from "./Table";
import { Product } from "@stripe/firestore-stripe-payments";
import { useState } from "react";
import Loader from "./Loader";
import { loadCheckout } from "../lib/stripe";

interface IProps {
  products: Product[];
}

export default function Plans({ products }: IProps): JSX.Element {
  const { logout, user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product>(products[2]);
  const [isBillingLoading, setSsBillingLoading] = useState<boolean>(false);

  const subscribeToPlan = () => {
    if (!user) return;

    loadCheckout(selectedPlan.prices[0].id);
    setSsBillingLoading(true);
  };

  return (
    <div>
      <Head>
        <title>Pugaflix plans</title>

        <link rel="icon" href="..//favicon.ico" />
      </Head>
      <header className=" border-b border-white/10 bg-[#141414]">
        <Link href={"/"}>
          <NetflixIcon />
        </Link>
        <button onClick={logout} className=" hover:underline text-lg">
          Sign Out
        </button>
      </header>
      <main className="  max-w-5xl pt-28 pb-12 tr md:px-10 px-4 mx-auto">
        <h1 className="mb-3 text-3xl ">Choose the plan that's right for you</h1>
        <ul>
          <PlansList
            text={`Watch all you want.
            Ad-free.`}
          />
          <PlansList
            text={`Recommendations
            just for you.`}
          />
          <PlansList
            text={`Change or cancel
            your plan anytime.`}
          />
        </ul>
        <div className=" mt-4 flex flex-col space-y-4">
          <div className=" flex w-full items-center self-end md:w-3/5">
            {products.map((item) => {
              return (
                <div
                  onClick={() => {
                    setSelectedPlan(item);
                  }}
                  className={`planBox ${
                    selectedPlan?.id === item.id ? "opacity-100" : "opacity-50"
                  }`}
                  key={item.id}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <Table products={products} selectedPlan={selectedPlan} />
          <button
            disabled={!selectedPlan || isBillingLoading}
            onClick={subscribeToPlan}
            className={`mx-auto md:w-1/2 w-11/12 rounded bg-[#e50914] py-4 text-xl shadow hover:bg-[#f6121d] md-w-[420px] tr
          ${isBillingLoading && "opacity-60"}`}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </main>
    </div>
  );
}

interface IPropsList {
  text: string;
}

function PlansList({ text }: IPropsList): JSX.Element {
  return (
    <li className="flex items-center text-lg gap-x-2">
      <CheckIcon className="w-6 h-6 text-[#e50914]" /> {text}
    </li>
  );
}
