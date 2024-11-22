import React, { useEffect, useState } from 'react';
import { createEmp, getEmp, updateEmp } from '../../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
  const [username, setUserName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigator = useNavigate();
  const { id } = useParams();
  console.log("Employee ID:", id);

  const [errors, setErrors] = useState({
    username: '',
    lastname: '',
    email: ''
  });

  useEffect(() => {
    if (id) {
      // Fetch existing employee data
      // getEmp(id)
      //   .then((response) => {
      //     console.log('Employee data:', response);
      //     setUserName(response.username);
      //     setLastName(response.lastname);
      //     setEmail(response.email);
      //   })

      getEmp(id)
      .then((response) => response.json())
      .then((data) => {
        console.log('Employees data:', data);
        setEmail(data.email);
        setUserName(data.username);
        setLastName(data.lastname);
      })
        .catch((error) => {
          console.error('Error fetching employee data:', error);
          setErrorMessage('Error fetching employee data. Please try again later.');
        });
    }
  }, [id]); // Fetch when `id` changes (i.e., when you navigate to the edit page)

  const handleUsername = (e) => setUserName(e.target.value);
  const handleLastname = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (username.trim()) {
      errorsCopy.username = '';
    } else {
      errorsCopy.username = 'Username is required';
      valid = false;
    }

    if (lastname.trim()) {
      errorsCopy.lastname = '';
    } else {
      errorsCopy.lastname = 'Lastname is required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const saveEmpOrUpdateEmp = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const employee = { username, lastname, email };
      

      // Send updated employee data
      if (id) {
        console.log('Updated employee data:', employee+" : "+ id);
        updateEmp(id, employee)                     
          .then((data) => {
            console.log("Successfully updated:", data);
            navigator('/employees'); // Redirect to employees list after successful update
          })
          .catch((error) => {
            console.error("Error updating employee:", error);
          });
      } else {
        // Create new employee
        createEmp(employee)
          .then((response) => {
            console.log('Employee created:', response.data);
            navigator('/employees'); // Redirect to employees list after successful creation
          })
          .catch((error) => {
            console.error('Error creating employee:', error);
          });
      }
    }
  };

  return (
    <div className="container">
      <br /><br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{id ? 'Update Employee' : 'Add Employee'}</h2>
          <div className="card-body">
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form onSubmit={saveEmpOrUpdateEmp}>
              <div className="form-group mb-2">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  placeholder="Enter Employee Username"
                  name="username"
                  value={username}
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  onChange={handleUsername}
                />
                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Lastname</label>
                <input
                  type="text"
                  placeholder="Enter Employee Lastname"
                  name="lastname"
                  value={lastname}
                  className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                  onChange={handleLastname}
                />
                {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={handleEmail}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
