import { CheckIcon } from "@heroicons/react/outline";
import {Product} from "@stripe/firestore-stripe-payments"


interface IProps {
    products: Product[]
    selectedPlan:Product
  }

export default function Table({products,selectedPlan}:IProps): JSX.Element {
  return (
    <table>
      <tbody className="divide-y divide-[#6d6d6d]">
        <tr className="tableRow ">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((item)=>{
            return <td key={item.id}
            className={`tableDataFeature ${selectedPlan.id===item.id?"text-[#e50914]":"text-white/40"}`}
            >EUR {item.prices[0].unit_amount! /100}</td>
          })}
        </tr>
        <tr className="tableRow ">
          <td className="tableDataTitle">Video Quality</td>
          {products.map((item)=>{
            return <td key={item.id}
            className={`tableDataFeature ${selectedPlan.id===item.id?"text-[#e50914]":"text-white/40"}`}
            >{item.metadata.videoQuality}</td>
          })}
        </tr>
        <tr className="tableRow ">
          <td className="tableDataTitle">Resolution</td>
          {products.map((item)=>{
            return <td key={item.id}
            className={`tableDataFeature ${selectedPlan.id===item.id?"text-[#e50914]":"text-white/40"}`}
            >{item.metadata.resolution}</td>
          })}
        </tr>
        <tr className="tableRow ">
          <td className="tableDataTitle">Watch on your Tv, computer, mobile phone and tablet</td>
          {products.map((item)=>{
            return <td key={item.id}
            className={`tableDataFeature ${selectedPlan.id===item.id?"text-[#e50914]":"text-white/40"} flex justify-center`}
            ><CheckIcon className="w-6 h-6"/></td>
          })}
        </tr>
      </tbody>
    </table>
  );
}
