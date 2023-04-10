import { useState, useEffect } from "react";
import {API} from "../api/notusapi";
import "./App.css";
import Mytable from '../components/table';

export default function App() {
  const [state, setState] = useState(null as any);
  async function getApi() {
    let blocks = await API.get("/blocks", {
      params: {
        lastItem: 0,
        limit: 100,
        network: "dev",
      },
    });
    setState(blocks.data);
  }
  useEffect(() => {
    getApi();
  }, []);

  return <div className="App">
    <h1>Blocks</h1>
    <br></br>
    <Mytable />


       
       
  </div>;
}
