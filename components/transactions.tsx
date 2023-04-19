import "../src/App";
import { Block } from "../api/types";
import { Link } from "react-router-dom";
import { useLastTenTransactions } from "../hooks/useLastTenTransactions";
import { Transaction } from "../api/types";
import Transactionrows from "../components/transactionrows"

export default function Transacionten({ transactions }: { transactions: Transaction[] }) {
    const { loadingt, statet } =useLastTenTransactions();
  return (
    <table>
      <thead>
        <tr>
          <th>Tx</th>
          <th>From</th>
          <th>To</th>
          <th>Transaction</th>
          <th>Result</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <Transactionrows transactions={transactions} />
     </tbody>
    </table>
  );
}
