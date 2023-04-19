import { useState, useEffect } from "react";
import { API } from "../api/notusapi";
import "./App.css";
import Mytable from "../components/table";
import { useBlocks } from "../hooks/useBlocks";
import { useLastTenTransactions } from "../hooks/useLastTenTransactions";
import  Transacionten  from "../components/transactions";

export default function App() {
  const { loading, state } = useBlocks();
  const { loadingt, statet } = useLastTenTransactions();
  // const useBlocksData = useBlocks();
  // useBlocksData.loading
  // useBlocksData.state

  return (
    <div className="App ClsMain">
      <div className="clsAlt">
        <h1>Blocks</h1>
      <br></br>
      {!loading && state ? <Mytable blocks={state} /> : <div>Loading...</div>}
      </div>
      <div className="clsAlt">
        <h1> Last Ten Transactions</h1>
      <br></br>
      {!loadingt && statet ? <Transacionten transactions={statet} /> : <div>Loading...</div>}
      </div>
      
    </div>
  );
}
