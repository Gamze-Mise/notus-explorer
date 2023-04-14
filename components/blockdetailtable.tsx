import "../src/App.css";
import { API } from "../api/notusapi";
import { useState, useEffect } from "react";
import { TxBlock } from "./islemBlogu";
import { Block } from "../api/types";

export default function DetailTable({ block }: { block: any }) {
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
            <td>{block.data.info.type}</td>
          </tr>
          <tr>
            <td>Timestamp</td>
            <td>{block.data.info.time}</td>
          </tr>
          <tr>
            <td>Transactions</td>
            <td>{block.data.info.nonce.method}</td>
          </tr>
          <tr>
            <td>Gas Used</td>
            <td>{block.data.feeTotal}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>Success</td>
          </tr>
          <tr>
            <td>Creator</td>
            <td>{JSON.stringify(block.data.validator.map.block)}</td>
          </tr>
        </tbody>
      </table>
      <br />

      {block.data.info.type == 120 ? (
        <TxBlock row_no={block.row_no} />
      ) : (
        "Empty Block"
      )}
    </div>
  );
}
