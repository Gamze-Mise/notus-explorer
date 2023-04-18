import { useState, useEffect } from "react";
import { API } from "../api/notusapi";
import "./App.css";
import Mytable from "../components/table";
import { useBlocks } from "../hooks/useBlocks";

export default function App() {
  const { loading, state } = useBlocks();
  // const useBlocksData = useBlocks();
  // useBlocksData.loading
  // useBlocksData.state

  return (
    <div className="App">
      <h1>Blocks</h1>
      <br></br>
      {!loading && state ? <Mytable blocks={state} /> : <div>Loading...</div>}
    </div>
  );
}
