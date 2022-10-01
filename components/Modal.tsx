import {
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/outline";
import MuiModal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Genre, Movie, PugaMovie } from "../typing";
import { ElementTyping } from "../typing";

export default function Modal(): JSX.Element {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!movie) return;
    const API_KEY: string | undefined = process.env.NEXT_PUBLIC_API_KEY;
    const BASE_URL: string = "https://api.themoviedb.org/3";
    const fetchMovie = async () => {
      const data = await fetch(
        `${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((er) => console.log(er.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: ElementTyping) => {
            return element.type === "Trailer";
          }
        );
        setTrailer(data?.videos.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    };

    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed top-8 right-0 left-0 mx-auto z-50 w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-lg
    scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="modalBtn absolute right-5 top-5 !z-40"
        >
          <XIcon className="w-6 h-6 stroke-[2px] tr hover:stroke-[3px]" />
        </button>
        <div className=" relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className=" absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-4">
              <button className=" flex items-center gap-x-2 rounded bg-white text-black px-8 pb-[10px] pt-3 tr hover:bg-[#e6e6e6]">
                <FaPlay className=" w-6 h-6 text-black" />
                Play
              </button>
              <button className=" modalBtn">
                <PlusIcon className="w-6 h-6" />
              </button>
              <button className=" modalBtn">
                <ThumbUpIcon className="w-6 h-6" />
              </button>
            </div>
            <button
              className="modalBtn"
              onClick={() => {
                setMuted((prev) => !prev);
              }}
            >
              {muted ? (
                <VolumeOffIcon className="w-6 h-6" />
              ) : (
                <VolumeUpIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div className=" flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className=" space-y-6 text-md lg:text-lg">
            <div className=" flex items-center space-x-2">
              <p className=" text-green-400">
                {(movie!.vote_average * 10).toFixed(2)}% Match 
              </p>
              <p>{movie?.release_date}</p>
              <div className=" flex h-5 items-center justify-center rounded border border-white/40 px-2 -mt-1">
                <p className=" pt-1">HD</p>
              </div>
            </div>
            <div className="flex flex-col gap-x-10 md:flex-row">
              <p className=" w-5/6">{movie?.overview}</p>
              <div className=" flex flex-col space-y-3 mt-4 md:mt-0">
                <div className=" text-white flex gap-x-2 md:flex-col">
                  <span className=" text-[#424242]">Genres: </span>
                  <p>{genres.map((genre) => genre.name).join(", ")}</p>
                </div>
                <div className=" text-white flex gap-x-2 md:flex-col">
                  <span className=" text-[#424242]">Original language: </span>
                  <p>{movie?.original_language}</p>
                </div>
                <div className=" text-white  flex gap-x-2 md:flex-col">
                  <span className=" text-[#424242]">Total votes: </span>
                  <p>{movie?.vote_count}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}
