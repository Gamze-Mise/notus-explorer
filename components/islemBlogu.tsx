import { API } from "../api/notusapi";
import { useState, useEffect } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { Transaction } from "../api/types";

export function TxBlock({ row_no }: { row_no: number }) {
  const { loading, state } = useTransactions(row_no);

  return (
    <div>
      {!loading && state ? (
        <>
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
              {state.map((value: Transaction) => {
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
            </tbody>
          </table>
        </>
      ) : (
        <h1>Yükleniyorum!</h1>
      )}
    </div>
  );
}
