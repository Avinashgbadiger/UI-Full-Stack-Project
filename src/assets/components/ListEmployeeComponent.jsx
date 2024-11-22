import React, { useEffect, useState } from 'react';
import { deleteEmp, listEmployees } from '../../services/EmployeeService'; 
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]); 
  const navigator = useNavigate();

  useEffect(() => {
    listOfAllEmp();
  }, []);
  
function listOfAllEmp(){
  listEmployees()
      .then((response) => response.json())
      .then((data) => {
        console.log('Employees data:', data);
        setEmployees(data);
      })
      .catch((error) => console.error('Error fetching employees:', error));
}
  function addNewEmp() {
    navigator('/add-employee');
  }

  function updateEmp(id) {
    navigator(`/edit-employee/${id}`);
  }

 function deleteEmpWithId(id){
    console.log(id);
    deleteEmp(id).then((response)=>{
      listOfAllEmp();
    }).catch((error)=>{
      console.error(error);
    })
      
    
  }
  

  return (
    <div className="container">
      <h2 className="text-center">List Of Employees</h2>
      <button type="button" className="btn btn-dark mb-2" onClick={addNewEmp}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered custom-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.username || 'N/A'}</td>
              <td>{e.lastname || 'N/A'}</td>
              <td>{e.email || 'N/A'}</td>
              <td>
                <button className="btn btn-info" onClick={() => updateEmp(e.id)}>
                  Update
                </button>
                <button style={{marginLeft:'10px'}} className="btn btn-danger" onClick={() => deleteEmpWithId(e.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
