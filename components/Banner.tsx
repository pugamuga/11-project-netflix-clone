import Image from "next/image";
import { PugaMovie } from "../typing";


interface IProps {
  netflixOriginal: PugaMovie[];
}

export default function Banner({ netflixOriginal }: IProps): JSX.Element {
  return (
    <div>
      {/* <div>
        <Image />
      </div> */}
    </div>
  );
}
