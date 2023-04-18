import { useState, useEffect } from "react";
import { Transaction } from "../api/types";
import { API } from "../api/notusapi";

export function useTransaction(id: string) {
  const [state, setState] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function getTransactionFromBlock() {
    let transactiondata = (
      await API.get("transaction/" + id, {
        params: {
          network: "dev",
        },
      })
    ).data;
    transactiondata.data = JSON.parse(transactiondata.data);

    setState(transactiondata as Transaction);
    setLoading(false);
  }
  useEffect(() => {
    getTransactionFromBlock();
  }, []);

  return { loading, state };
}
