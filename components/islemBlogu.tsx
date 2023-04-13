import { API } from "../api/notusapi";
import { useState, useEffect } from "react";
/*


*/
export function TxBlock({ row_no }: { row_no: number }) {
  const [state2, setState2] = useState(null as any);

  async function getBlock300() {
    let block = await API.get("block/" + row_no + "/transactions", {
      params: {
        network: "dev",
      },
    });
    let block_data = block.data;
    block_data[0].data = JSON.parse(block_data[0].data);
    setState2(block_data);
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
            <tr>
              <td>{row_no}</td>
              <td>{state2[0].transactionId.substring(0, 20) + "..."} </td>
              <td>{state2[0].timestamp}</td>
              <td>{state2[0].sender.substring(0, 20) + "..."}</td>
              <td>{state2[0].receiver.substring(0, 20) + "..."}</td>
              <td>{state2[0].data.Volume}</td>
              <td>{"Success"}</td>
              <td>{state2[0].data.Fee} </td>
            </tr>
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
