import { useState, useEffect } from "react";
import { Transaction } from "../api/types";
import { API } from "../api/notusapi";

export function useLastTenTransactions(limit: number = 10) {
  const [statet, setStatet] = useState<Transaction[] | null>(null);
  const [loadingt, setLoadingt] = useState(true);

  async function getApi() {
    let transactions = (
      await API.get("/transactions", {
        params: {
          lastItem: 0,
          limit: limit,
          network: "dev",
        },
      })
    ).data;

    for (let i = 0; i < transactions.length; i++) {
      transactions[i].data = JSON.parse(transactions[i].data);
    }

    setStatet(transactions);
    setLoadingt(false);
  }
  useEffect(() => {
    getApi();
  }, []);

  return { loadingt, statet };
}
