import { XIcon } from "@heroicons/react/outline";
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
  const [muted, setMuted] = useState(true);

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
    <MuiModal open={showModal} onClose={handleClose} className="fixed top-8 right-0 left-0 mx-auto z-50 w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-lg
    scrollbar-hide">
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
          <div>
            <div>
              <button className=" flex items-center gap-x-2 rounded">
                <FaPlay className=" w-6 h-6 text-black" />
                Play
              </button>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}
