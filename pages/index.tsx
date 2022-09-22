import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <div className=" flex flex-col items-center border-y-2 border-y-red-500 py-4">
        <div className=" text-red-500 text-5xl font-kufiM">PugaMuga</div>
        <div className=" text-white text-5xl font-nablaPixel bg-slate-900 px-4 py-2 my-2">
          PugaMuga
        </div>
        <div className=" text-red-500 text-5xl font-strongItalik">PugaMuga</div>
        <div className=" text-red-500 text-5xl font-lobster">PugaMuga</div>
      </div>
    </div>
  );
};

export default Home;
