import React from "react";

export default function ListEmployee({ employees,deleteEmp }) {
    function f1(){
        alert('f1.....')
    }
  return (
    <>
      <h4 className="text-center">Employee Table</h4>
      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>Eid</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, ind) => {
            return (
              <tr key={ind}>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
                <td>
                  <button onClick={()=>deleteEmp(emp.eId)} className="btn btn-danger">Del</button>
                  <button className="btn btn-success ms-1">View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
