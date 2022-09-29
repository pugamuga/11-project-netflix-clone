import { PugaMovie } from "../typing";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Thumbnail from "./Thumbnail";
import { useRef, useState } from "react";

interface IProps {
  title: string;
  movies: PugaMovie[];
}

export default function Row({ title, movies }: IProps): JSX.Element {
    const [isMoved, setIsMoved] = useState<boolean>(false);
    const RowRef = useRef<HTMLDivElement>(null)
    const handleClick = (side:"left"|"right") =>{
        setIsMoved(true)
        if(RowRef.current){
            const { scrollLeft, clientWidth} = RowRef.current
            const scrollTo = side === "left"? scrollLeft - clientWidth: scrollLeft + clientWidth

            RowRef.current.scrollTo({left:scrollTo, behavior:"smooth"})
        }
    }

  

  return (
    <div className="h-40 space-y-[2px] md:space-y-2 ">
      <h1 className=" w-56 cursor-pointer text-sm text-[#e5e5e5] tr hover:text-white md:text-2xl">
        {title}
      </h1>
      <div className=" group relative md:-ml-2 ">
        <ChevronLeftIcon
        onClick={() => {
         handleClick("left")   
        }}
          className={`w-8 h-8 absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer 
        tr hover:scale-125  opacity-0 group-hover:opacity-100 ${!isMoved&&"hidden"}`}
        />
        <div ref={RowRef} className=" flex items-center space-x-[4px] overflow-x-scroll
        md:space-x-[8px] md:p-2 scrollbar-hide">
          {movies.map((item)=>{
            return <Thumbnail key={item.id} item={item}/>
          })}
        </div>
        <ChevronRightIcon
        onClick={() => {
         handleClick("right")   
        }}
          className="w-8 h-8 absolute top-0 bottom-0 right-2 z-40 m-auto cursor-pointer 
        tr hover:scale-125 opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
