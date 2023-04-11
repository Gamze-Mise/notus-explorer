import "../src/App.css";

export default function Myrows({ blocks }: { blocks: any }) {
  return (
    <>
      {blocks.map((value: any, index: any) => {
        const valueData = JSON.parse(value.data);
        return (
          <tr key={index} id={index}>
            <td>{value.row_no}</td>
            <td>{value.row_no}</td>
            <td>{valueData.info.type}</td>
            <td>{valueData.hash.FINAL.substring(0, 50) + "..."}</td>
            <td>{valueData.feeTotal}</td>
            <td>{valueData.feeTotal}</td>
            <td>{valueData.txNum}</td>
          </tr>
        );
      })}
    </>
  );
}
