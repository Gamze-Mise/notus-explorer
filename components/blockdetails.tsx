import "../src/App.css";
import { useParams } from "react-router-dom";
import { API } from "../api/notusapi";
import { useState, useEffect } from "react";
import DetailTable from "../components/blockdetailtable";
import { Link } from "react-router-dom";
import { Block } from "../api/types";

export default function BlockDetails() {
  const { rowno } = useParams();
  const [state1, setState1] = useState(null as any);
  async function getBlock() {
    let blockAny = (
      await API.get("/block/" + rowno, {
        params: {
          network: "dev",
        },
      })
    ).data;

    blockAny.data = JSON.parse(blockAny.data);
    let block: Block = blockAny;

    setState1(block);
  }
  useEffect(() => {
    getBlock();
  }, []);
  return (
    <div>
      <div className="DetailDiv">
        <h1>Block Details</h1>

        <Link to="/">Go to Blocks Table</Link>
      </div>

      {state1 ? <DetailTable block={state1} /> : "Bekle"}
      <br />
      <br />
    </div>
  );
}
