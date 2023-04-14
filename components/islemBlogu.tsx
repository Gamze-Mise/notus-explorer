import { API } from "../api/notusapi";
import { useState, useEffect } from "react";
import { Transaction } from "../api/types";
/*


*/
export function TxBlock({ row_no }: { row_no: number }) {
  const [state2, setState2] = useState<Transaction[] | null>(null);

  async function getBlock300() {
    let transactionsdata = (
      await API.get("block/" + row_no + "/transactions", {
        params: {
          network: "dev",
        },
      })
    ).data;

    for (let i = 0; i < transactionsdata.length; i++) {
      transactionsdata[i].data = JSON.parse(transactionsdata[i].data);
    }

    setState2(transactionsdata as Transaction[]);
  }
  useEffect(() => {
    getBlock300();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Txn Hash</th>
            <th>Age</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
            <th>Result</th>
            <th>Txn Fee</th>
          </tr>
        </thead>
        <tbody>
          {state2 ? (
            <>
              {state2.map((value: Transaction) => {
                return (
                  <tr>
                    <td>{value.rowNo}</td>
                    <td>{value.transactionId.substring(0, 20) + "..."} </td>
                    <td>{value.timestamp}</td>
                    <td>{value.sender.substring(0, 20) + "..."}</td>
                    <td>{value.receiver.substring(0, 20) + "..."}</td>
                    <td>{value.data.Volume}</td>
                    <td>{"Success"}</td>
                    <td>{value.data.Fee} </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <tr>
              <td>Yükleniyorum!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
