/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { useEffect } from "react";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  let heading = ["Flag", "Name", "Population", "Area (km²)", "Region"];

  return (
    <table className="w-full">
      <thead className="border-b-2 border-solid border-grey-700">
        <tr>
          {heading.map((head, i) => (
            <th className="pl-2 pb-2 text-left" key={i}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowContent, i) => (
          <TableRow rowContent={rowContent} key={i} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
