import { useState, useEffect } from "react";
import { Block } from "../api/types";
import { API } from "../api/notusapi";

export function useBlocks(limit: number = 10) {
  const [state, setState] = useState<Block[] | null>(null);
  const [loading, setLoading] = useState(true);

  async function getApi() {
    let blocks = (
      await API.get("/blocks", {
        params: {
          lastItem: 0,
          limit: limit,
          network: "dev",
        },
      })
    ).data;

    for (let i = 0; i < blocks.length; i++) {
      blocks[i].data = JSON.parse(blocks[i].data);
    }

    setState(blocks);
    setLoading(false);
  }
  useEffect(() => {
    getApi();
  }, []);

  return { loading, state };
}
