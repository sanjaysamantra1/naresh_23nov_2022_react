import React, { useState } from "react";
import AddEmployee from "./AddEmployee";
import ListEmployee from "./EmployeeList";

export default function EmployeeCRUD() {
  const initialEmployees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 },
  ];
  const [employees, setEmployees] = useState(initialEmployees);

  const deleteEmp = (eidToDelete) => {
    const tempArray = employees.filter((emp) => {
      return emp.eId !== eidToDelete;
    });
    setEmployees(tempArray);
  };

  const addEmp = (empObj) => {
    setEmployees([...employees, empObj]);
  };

  return (
    <>
      <h1 className="text-center bg-success text-white p-2">
        This is Employee CRUD Example
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <ListEmployee employees={employees} deleteEmp={deleteEmp} />
          </div>
          <div className="col-sm-4">
            <AddEmployee addEmp={addEmp} />
          </div>
        </div>
      </div>
    </>
  );
}
