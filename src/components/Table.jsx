import React, { useEffect, useState } from "react";
import styles from "./table.module.css"
import TableItem from "./TableItem";

const Table = ({ data, setData }) => {
  const [page, setPage] = useState(1);
  const [department, setDepartment] = useState()
  const [order, setOrder] = useState()
  useEffect(() => {
    fetch(`http://localhost:3040/data?_page=${page}&_limit=5&department=${department}&_sort=salary&_order=${order}`)
      .then((r) => r.json())
      .then((d) => {
        setData(d);
      });
  }, [page,department,order]);
  return (
    <div className={styles.table}>
        <div>
            <select onChange={(e)=>setOrder(e.target.value)}>
                <option value="">Sort by salary</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
            <select onChange={(e)=>setDepartment(e.target.value)}>
                <option value="">Filter by department</option>
                <option value="Manager">Manager</option>
                <option value="Executive Officer">Executive Officer</option>
                <option value="Officer">Officer</option>
                <option value="Junior Officer">Junior Officer</option>
                <option value="Assistant Officer">Assistant Officer</option>
            </select>
        </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Married</th>
          </tr>
        </thead>
        {data.map((d) => (
            <TableItem name={d.name} age={d.age} address={d.address} department={d.department} salary={d.salary} married={d.married}/>
        ))}
      </table>
      <button onClick={()=>setPage(page-1)}>Previous Page</button>
      <button onClick={()=>setPage(page+1)}>Next Page</button>
    </div>
  );
};

export default Table;
