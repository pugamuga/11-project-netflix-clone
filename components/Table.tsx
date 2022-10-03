import {Product} from "@stripe/firestore-stripe-payments"


interface IProps {
    products: Product[];
  }

export default function Table({products}:IProps): JSX.Element {
  return (
    <table>
      <tbody>
        <tr>
          <td>Monthly price</td>
          {products.map((item)=>{
            return <td key={item.id}
            className="tableDataFeature"
            >EUR {item.prices[0].unit_amount! /100}</td>
          })}
        </tr>
      </tbody>
    </table>
  );
}
