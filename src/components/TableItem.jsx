import React from "react";

const TableItem = ({name,age,address,department,salary,married}) => {
  return (
    <tr>
    <td>{name}</td>
    <td>{age}</td>
    <td>{address}</td>
    <td>{department}</td>
    <td>{salary}</td>
    <td>{married ? "Yes" : "No"}</td>
  </tr>
  );
};

export default TableItem;
