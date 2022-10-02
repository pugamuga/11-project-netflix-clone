import {
  createCheckoutSession,
  getStripePayments,
} from "@stripe/firestore-stripe-payments";
import app from "../firebase";
import { getFunctions, HttpsCallable } from "@firebase/functions";

const payments = getStripePayments(app, {
  productsCollection: "products",
  customersCollection: "customers",
});

const loadCheckout = async (priceId: string) => {
  await createCheckoutSession(payments, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  })
    .then((snap) => window.location.assign(snap.url))
    .catch((e) => console.log(e.message));
};

export {loadCheckout}
export default payments