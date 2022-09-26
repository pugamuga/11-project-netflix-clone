import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { PugaMovie } from "../typing";

interface IProps {
  netflixOriginal: PugaMovie[];
}

export default function Banner({ netflixOriginal }: IProps): JSX.Element {
  const [movie, setMovie] = useState<PugaMovie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginal[Math.floor(Math.random() * netflixOriginal.length)]
    );
  }, [netflixOriginal]);

  return (
    <div className=" flex flex-col space-y-2 md:space-y-4 py-16 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className=" absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className=" text-2xl lg:text-7xl md:text-4xl">{movie?.title}</h1>
      <p className=" max-w-xs text-xs md:text-xl md:max-w-lg lg:max-w-2xl lg:text-2xl ">{movie?.overview}</p>
    <div>
      <button className="bannerBtn">Play</button>
      <button className="bannerBtn">More Info</button>
    </div>
    
    </div>
  );
}
