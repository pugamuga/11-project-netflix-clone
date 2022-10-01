import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { PugaMovie } from "../typing";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

interface IProps {
  netflixOriginal: PugaMovie[];
}

export default function Banner({ netflixOriginal }: IProps): JSX.Element {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  const [movie, setMovie] = useState<PugaMovie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginal[Math.floor(Math.random() * netflixOriginal.length)]
    );
  }, [netflixOriginal]);

  return (
    <div className=" flex flex-col space-y-2 md:space-y-4 py-16 lg:h-[65vh] lg:justify-end lg:pb-12 tr ">
      <div className=" absolute top-0 left-0 h-[95vh]   -z-10 w-screen">
        <Image
          src={`${baseUrl}${movie?.poster_path}`}
          layout="fill"
          className=" object-cover lg:object-center "
          loading="lazy"
        />
      </div>
      <h1 className=" text-2xl lg:text-7xl md:text-4xl">{movie?.title}</h1>
      <p className=" max-w-xs text-xs md:text-xl md:max-w-lg text-shadow-xl lg:max-w-2xl lg:text-2xl ">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerBtn cursor-pointer">
          <FaPlay className="mb-[2px] h-4 w-4 text-black md:h-7 md:w-7 " /> Play
        </button>
        <button
          className="bannerBtnGhost cursor-pointer"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info
          <InformationCircleIcon className=" w-4 h-4 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}
