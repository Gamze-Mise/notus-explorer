import "../src/App.css";
import {  useParams } from "react-router-dom";
import { API } from "../api/notusapi";
import { useState, useEffect } from "react";
import DetailTable from "../components/blockdetailtable";
import { Link } from "react-router-dom";


export default function BlockDetails() {
  const { rowno } = useParams();
  const [state1, setState1] = useState(null as any);
  async function getBlock() {
    let block= await API.get("/block/"+rowno, {
      params: {
        network: "dev",
      },
    });
    setState1(block.data);
    state1 ? console.log(state1) : console.log("yüklüyo bekle");
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
   
        {state1 ? <DetailTable block={state1} />: "Bekle"}
        <br /><br />
      </div>
  );
}
