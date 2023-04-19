import { Block } from "../api/types";
import "../src/App.css";
import { Link } from "react-router-dom";

export default function Myrows({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((value: Block, index: number) => {
        return (
          <tr key={index} id={index.toString()}>
            <td>
              <Link to={"/blocks/" + value.row_no} className="None">
                {value.row_no}
              </Link>
            </td>
            <td>{value.row_no}</td>
            <td>{value.data.info.type}</td>
            <td>{value.data.hash.FINAL.substring(0, 20) + "..."}</td>
            <td>{value.data.feeTotal}</td>
            <td>{value.data.feeTotal}</td>
            <td>{value.data.txNum}</td>
          </tr>
        );
      })}
    </>
  );
}
