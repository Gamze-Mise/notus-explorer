import { useState, useEffect } from "react";
import "../src/App";
import Myrows from "../components/rows";

export default function Mytable({ blocks }: { blocks: any }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Block</th>
          <th>Age</th>
          <th>Type</th>
          <th>Hash</th>
          <th>Gas Used</th>
          <th>Gas Fee</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <Myrows blocks={blocks} />
      </tbody>
    </table>
  );
}
