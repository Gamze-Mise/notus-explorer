import { useState, useEffect } from "react";
import { Block, Transaction } from "../api/types";
import { API } from "../api/notusapi";

export function useTransactions(row_no: number) {
  const [state, setState] = useState<Transaction[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function getTransactionsFromBlock() {
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

    setState(transactionsdata as Transaction[]);
    setLoading(false);
  }
  useEffect(() => {
    getTransactionsFromBlock();
  }, []);

  return { loading, state };
}
