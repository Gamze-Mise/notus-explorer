import { useState, useEffect } from "react";
import { Block } from "../api/types";
import { API } from "../api/notusapi";

export function useBlock(row_no: number) {
  const [state, setState] = useState<Block | null>(null);
  const [loading, setLoading] = useState(true);

  async function getApi() {
    let blockData = (
      await API.get("/block/" + row_no, {
        params: {
          network: "dev",
        },
      })
    ).data;

    blockData.data = JSON.parse(blockData.data);

    setState(blockData);
    setLoading(false);
  }

  useEffect(() => {
    getApi();
  }, []);

  return { loading, state };
}
