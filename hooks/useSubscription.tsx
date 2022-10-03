import {
  Subscription,
  onCurrentUserSubscriptionUpdate,
} from "@stripe/firestore-stripe-payments";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import payments from "../lib/stripe";

export default function useSubscription(user: User | null): Subscription | null {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  useEffect(() => {
    if (!user) return;

    onCurrentUserSubscriptionUpdate(payments, (snap) => {
      setSubscription(
        snap.subscriptions.filter(
          (sub) => sub.status === "active" || sub.status === "trialing"
        )[0]
      );
    });
  }, [user]);
  return subscription;
}
