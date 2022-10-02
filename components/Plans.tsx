import { CheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import NetflixIcon from "./svg/NetflixIcon";
import Table from "./Table";
import { Product } from "@stripe/firestore-stripe-payments";

interface IProps {
  products: Product[];
}

export default function Plans({ products }: IProps): JSX.Element {
  const { logout } = useAuth();

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
      <main className=" mt-28 max-w-5xl pt-28 pb-12 tr md:px-10">
        <h1 className="mb-3 text-3xl">Choose the plan that's right for you</h1>
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
          <div className=" flex w-full items-center self-end lg:w-3/5">
            {products.map((item) => {
              return <div className="planBox" key={item.id}>{item.name}</div>;
            })}
          </div>
          <Table />
          <button>Subscribe</button>
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
