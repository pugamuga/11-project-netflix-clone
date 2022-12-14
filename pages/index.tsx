import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import request from "../utils/request";
import { PugaMovie, Genre } from "../typing";
import Row from "../components/Row";
import useAuth from "../hooks/useAuth";
import { useRecoilValue } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import Modal from "../components/Modal";
import Plans from "../components/Plans";
import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import payments from "../lib/stripe";
import useSubscription from "../hooks/useSubscription";
import { Subscription } from "@stripe/firestore-stripe-payments";
import useList from "../hooks/useList";

interface IProps {
  netflixOriginal: PugaMovie[];
  tranding: PugaMovie[];
  topRated: PugaMovie[];
  actionMovies: PugaMovie[];
  comedyMovies: PugaMovie[];
  horrorMovies: PugaMovie[];
  romanceMovies: PugaMovie[];
  documentaries: PugaMovie[];
  products: Product[];
}

const Home = ({
  netflixOriginal,
  tranding,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
  products,
}: IProps): JSX.Element | null => {
  const { loading, user } = useAuth();
  const showModal = useRecoilValue(modalState);
  const subscription = useSubscription(user);
  const movie = useRecoilValue(movieState);
  const list = useList(user?.uid);

  if (loading || subscription === null) return null;
  if (!subscription) return <Plans products={products} />;

  return (
    <div className=" relative h-screen bg-gradient-to-b">
      <Head>
        <title>Pugaflix</title>

        <link rel="icon" href="..//favicon.ico" />
      </Head>
      <Header list={list} />
      <main id="home" className=" relative pl-4 pb-24 space-y-12 pt-12 lg:pt-0 md:space-y-24 lg:pl-16 tr">
        <Banner netflixOriginal={netflixOriginal} />
        <section className=" md:space-y-24">
          <div id="all">
            <Row title="Trending Now" movies={tranding} />
          </div>
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/*my list*/}
          {list.length > 0 && (
            <div id="myList">
              <Row title="My list" movies={list} />
            </div>
          )}
          {/*my list*/}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Horrors" movies={horrorMovies} />
          <Row title="Romance movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((e) => console.log(e.message));

  const [
    netflixOriginal,
    tranding,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(request.fetchNetflixOriginal).then((res) => res.json()),
    fetch(request.fetchTranding).then((res) => res.json()),
    fetch(request.fetchTopRated).then((res) => res.json()),
    fetch(request.fetchActionMovies).then((res) => res.json()),
    fetch(request.fetchComedyMovies).then((res) => res.json()),
    fetch(request.fetchHorrorMovies).then((res) => res.json()),
    fetch(request.fetchRomanceMovies).then((res) => res.json()),
    fetch(request.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginal: netflixOriginal.results,
      tranding: tranding.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      products,
    },
  };
};
