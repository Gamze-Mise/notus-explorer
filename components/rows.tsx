import "../src/App.css";
import { useState,useEffect } from "react";
import { API } from "../api/notusapi";


export default function Myrows() {
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
  return <> {  
    state &&
    state.map((value:any , index:any ) => {
          const valueData=JSON.parse(value.data);
          return <tr key={index} id={index} >
            <td>
            {value.row_no}
            </td>
            <td>
            {value.row_no}
            </td>
            <td>
            {valueData['info']['type']}
            </td>
            <td>
            {valueData['hash']['FINAL'].substring(0, 50)+'...'}
            </td>
            <td>
            {valueData['feeTotal']}
            </td>
            <td>
            {valueData['feeTotal']}
            </td>
            <td>
            {valueData['txNum']}
            </td>
          </tr>;
      })}
      </>
}