import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import Loader from "./Loader";
import { goToBillingPortal } from "../lib/stripe";

export default function Membership() {
  const { user } = useAuth();
  const subscription = useSubscription(user);
  const [isBillingLoading, setIsBillingLoading] = useState<boolean>(false);

  const manageSubscription = () => {
    if (subscription) {
      setIsBillingLoading(true);
      goToBillingPortal();
    }
  };
  return (
    <div className=" mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className=" space-y-2 py-4">
        <h1 className=" text-lg text-[#555]">Membership & Billing</h1>
        <button
          disabled={isBillingLoading || !subscription}
          className=" h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm text-black shadow-md hover:bg-gray-200 tr md:w-4/5"
          onClick={manageSubscription}
        >
          {isBillingLoading ? (
            <Loader color="dark:fill-[#e50914]" />
          ) : (
            "Cancel membership"
          )}
        </button>
      </div>
      <div className="col-span-3">

      </div>
    </div>
  );
}
