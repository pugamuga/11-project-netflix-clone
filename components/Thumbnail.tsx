import { PugaMovie } from "../typing"
import Image from "next/image"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"

interface IProps{
    item:PugaMovie
}

export default function Thumbnail({item}:IProps) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div onClick={() => {
      setCurrentMovie(item)
      setShowModal(true)
    }} className=" relative h-28 min-w-[180px] tr md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} layout="fill" className="rounded-sm object-center object-cover  md:rounded"/>
  
    </div>
  )
}