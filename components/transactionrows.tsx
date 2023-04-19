import { Transaction } from "../api/types";
import "../src/App.css";
import { Link } from "react-router-dom";

export default function Transactionrows({ transactions }: { transactions: Transaction[] }) {
    console.log("-------")
  return (
    <>
      {transactions.map((value: Transaction, index: number) => {
        console.log(value)
        return (
          <tr key={index} id={index.toString()}>
            <td>
                {value.rowNo}
            </td>
            <td>   {value.sender.substring(0, 10) + ".."}</td>
            <td>   {value.receiver.substring(0, 10) + ".."}</td>
            <td>{value.transactionId.substring(0, 10) + ".."} </td>
            <td>Success</td>
            <td>{value.timestamp}</td>
          </tr>
        );
      })}
    </>
  );
}
