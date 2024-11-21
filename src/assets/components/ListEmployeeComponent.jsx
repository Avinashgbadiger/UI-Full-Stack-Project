import React, { useEffect, useState } from 'react';
import { listEmployees } from '../../services/EmployeeService'; // Assuming this is correct
import { useNavigate } from 'react-router-dom';
import EmployeeComponent from './EmployeeComponent';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);  // Correct variable name
    

    const navigator=useNavigate();

    useEffect(() => {

       const da = listEmployees().then(response => response.json())
       .then(data => {
          console.log('h1',data)
         setEmployees(data);
         }).catch(error => console.error(error));
       
//         fetch('http://localhost:9999/v1/api/emp')     
//   .then(response => response.json())
//   .then(data => {
//     console.log('h1',data)
//     setEmployees(data);
//     }).catch(error => console.error(error));
        
    }, []);  // Empty dependency array ensures this runs only once when the component mounts


    function addNewEmp(){

    //    setShowComponent(true)
    navigator('/add-employee');
    }

    function updateEmp(id){
navigator(`/edit-employee/${id}`)
    }

    return (
    //     <div className="page-container">
      

    //   <div className="table-container">
        <div className="container">
          <h2 className="text-center">List Of Employees</h2>
          <button type="button" className="btn btn-dark mb-2" onClick={addNewEmp}>Add Employee</button>
          {/* {showComponent && <EmployeeComponent/>} */}
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
                  <td >
                    <button className='btn btn-info' onClick={()=>{updateEmp(e.id)}}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    //   </div>
    // </div>
    );
};

export default ListEmployeeComponent;
