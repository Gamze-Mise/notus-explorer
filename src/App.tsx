import { useState, useEffect } from "react";
import { API } from "../api/notusapi";
import "./App.css";

export default function App() {
  const [state1, setState1] = useState(null as any);
  async function getApi() {
    // ?lastItem=0&limit=100&network=dev
    let blocks = await API.get("/blocks", {
      params: {
        lastItem: 0,
        limit: 100,
        network: "dev",
      },
    });
    setState1(blocks.data);
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      {state1 &&
        state1.map((value: any) => {
          return <div>{value.row_no}</div>;
        })}
    </div>
  );
}
