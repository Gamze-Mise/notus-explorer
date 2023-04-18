import "../src/App.css";
import { useParams } from "react-router-dom";
import { API } from "../api/notusapi";
import { useState, useEffect } from "react";
import DetailTable from "../components/blockdetailtable";
import { Link } from "react-router-dom";
import { Block } from "../api/types";
import { useBlock } from "../hooks/useBlock";

export default function BlockDetails() {
  let { rowno } = useParams();

  if (!rowno) {
    rowno = "0";
  }

  const { loading, state } = useBlock(parseInt(rowno));

  return (
    <div>
      <div className="DetailDiv">
        <h1>Block Details</h1>

        <Link to="/">Go to Blocks Table</Link>
      </div>

      {!loading && state ? <DetailTable block={state} /> : "Bekle"}
      <br />
      <br />
    </div>
  );
}
