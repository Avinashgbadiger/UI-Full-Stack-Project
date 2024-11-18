import React, { useEffect, useState } from 'react';
import { listEmployees } from '../../services/EmployeeService'; // Assuming this is correct
import axios from "axios";

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);  // Correct variable name

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

    return (
        <div className="container">
            <h2>List Of Employees</h2>
            <table className="table table-striped">
    <thead>
        <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Last Name</th>
            <th>Email Id</th>
        </tr>
    </thead>
    <tbody>
        {employees.map((e) => (
            <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.username || 'N/A'}</td>
                <td>{e.lastname || 'N/A'}</td>
                <td>{e.email || 'N/A'}</td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
    );
};

export default ListEmployeeComponent;
