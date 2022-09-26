import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import request from "../utils/request";
import { PugaMovie, Genre } from "../typing";

interface IProps {
  netflixOriginal: PugaMovie[];
  tranding: PugaMovie[];
  topRated: PugaMovie[];
  actionMovies: PugaMovie[];
  comedyMovies: PugaMovie[];
  horrorMovies: PugaMovie[];
  romanceMovies: PugaMovie[];
  documentaries: PugaMovie[];
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
}: IProps): JSX.Element => {
  return (
    <div className=" relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Pugaflix-home</title>

        <link rel="icon" href="..//favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner netflixOriginal={netflixOriginal}/>
        <section className=""></section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
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
    },
  };
};
