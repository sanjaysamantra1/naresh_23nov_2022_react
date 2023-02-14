import React, { useState } from 'react'

export default function AddEmployee({addEmp}) {
  const [employeeID, setEmployeeID] = useState(106);
  const [employeeName, setEmployeeName] = useState("Prakash");
  const [employeeSalary, setEmployeeSalary] = useState(8000);


  const changeHandler = (e) => {
    if (e.target.name === "eID") {
      setEmployeeID(e.target.value);
    } else if (e.target.name === "eName") {
      setEmployeeName(e.target.value);
    } else {
      setEmployeeSalary(e.target.value);
    }
  };

  return <>
    <h4>Add Employee</h4>

    <div className='border p-2'>
        <div className='m-2'>
            Eid: 
            <input name="eID"
            placeholder="Enter Employee ID"
            onChange={changeHandler}/> 
        </div>
        <div className='m-2'>Name: <input name="eName"
        placeholder="Enter Employee Name"
        onChange={changeHandler}/> </div>
        <div className='m-2'>Salary: <input name="eSal"
        placeholder="Enter Employee Sal"
        onChange={changeHandler}/> </div>

        <button className='btn btn-primary' onClick={()=>{
            let empObj = {
                eId: employeeID,
                name: employeeName,
                sal: employeeSalary,
              };
              addEmp(empObj)
        }}>Add</button>
    </div> 
  </>
}
