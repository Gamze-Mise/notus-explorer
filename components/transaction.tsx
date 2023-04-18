import { useTransaction } from "../hooks/useTransaction";
import { useParams } from "react-router-dom";

export function MyTransaction() {
  let { transactionID } = useParams();
  const { loading, state } = useTransaction(transactionID as string);

  return (
    <div>
      {!loading && state ? (
        <table>
          <thead>
            <tr>
              <th>TransactionHash</th>
              <th>{transactionID}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Status</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>Block</td>
              <td>{state.rowNo}</td>
            </tr>
            <tr>
              <td>TimeStamp</td>
              <td>{state.data.CurrentTime}</td>
            </tr>
            <tr>
              <td>From</td>
              <td>{state.sender}</td>
            </tr>
            <tr>
              <td>To</td>
              <td>{state.receiver}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1>Yükleniyor bekle azcık</h1>
      )}
    </div>
  );
}
