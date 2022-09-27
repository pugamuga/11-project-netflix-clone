import { PugaMovie } from "../typing"
import Image from "next/image"

interface IProps{
    item:PugaMovie
}

export default function Thumbnail({item}:IProps) {
  return (
    <div className=" relative h-28 min-w-[180px] tr md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} layout="fill" className="rounded-sm object-cover md:rounded"/>
  
    </div>
  )
}