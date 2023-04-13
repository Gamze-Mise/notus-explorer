import "../src/App.css";
import { API } from "../api/notusapi";
import { useState, useEffect } from "react";
import { TxBlock } from "./islemBlogu";

export default function DetailTable({ block }: { block: any }) {
  const blockData = JSON.parse(block.data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Block Height</th>
            <th>{block.row_no}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Block Type</td>
            <td>{blockData.info.type}</td>
          </tr>
          <tr>
            <td>Timestamp</td>
            <td>{blockData.info.time}</td>
          </tr>
          <tr>
            <td>Transactions</td>
            <td>{blockData.info.nonce.method}</td>
          </tr>
          <tr>
            <td>Gas Used</td>
            <td>{blockData.feeTotal}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>Success</td>
          </tr>
          <tr>
            <td>Creator</td>
            <td>{blockData["validator"]["map"]["block"][1000]}</td>
          </tr>
        </tbody>
      </table>
      <br />

      {blockData.info.type == 120 ? (
        <TxBlock row_no={block.row_no} />
      ) : (
        "Empty Block"
      )}
    </div>
  );
}
