import React, { useState } from 'react'
 import { createEmp } from '../../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const EmployeeComponent = () => {

      const [username,setUserName]=useState('');
      const [lastname,setLastName]=useState('');
      const [email,setEmail]=useState('');
      const navigator=useNavigate();


    const [errors,setErrors]=useState({
      username: '',
      lastname:'',
      email:''
    })


      const handleUsername = (e)=> setUserName(e.target.value);
      

      const handleLastname = (e) => setLastName(e.target.value);

      const handleEmail=(e)=>setEmail(e.target.value);


      function saveEmp(e)
      {
        e.preventDefault();
        if(validateForm()){

         
          const employee={username,lastname,email};
          console.log(employee);
  
          createEmp(employee).then((response) => {
           console.log(response.data)
           navigator('/employees');
          
          })
        }
       
 
      }

      function validateForm(){
        let valid=true;
        const errorsCopy={... errors};
        if(username.trim()){
            errorsCopy.username='';

        }
        else{
          errorsCopy.username='Username is required';
          valid=false;
        }

        if(lastname.trim())
        {
          errorsCopy.lastname='';

        }else{
          errorsCopy.lastname='Lastname is required'
          valid=false;
        }
        if(email.trimEnd())
        {
          errorsCopy.email='';
        }else{
          errorsCopy.email='Email is Required';
          valid=false;
        }
        setErrors(errorsCopy);
        return valid;

      }

  return (
    <div  className='container' >
       <br /><br />
           <div className='row'>
           <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className='text-center'>Add Employee</h2>
  <div className="card-body">
   <form action="">
    <div className='form-group mb-2'>
        <label   className='form-label'> Username </label>
        <input  type="text" placeholder='Enter Employee Username' name='username' value={username} className={`form-control ${errors.username ? 'is-invalid':''}`} 
        onChange={handleUsername} ></input>
        {errors.username && <div className='invalid-feedback'>{errors.username}</div> }
    </div>

    <div className='form-group mb-2'>
        <label htmlFor="" className='form-label'> Lastname </label>
        <input  type="text" placeholder='Enter Employee Lastname' name='lastname' value={lastname} className={`form-control ${errors.lastname ? 'is-invalid':''}`} 
        onChange={handleLastname} ></input>
        {errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div> }
    </div>


    <div className='form-group mb-2'>
        <label htmlFor="" className='form-label'> Email </label>
        <input  type="text" placeholder='Enter Employee Email' name='email' value={email}  className={`form-control ${errors.email ? 'is-invalid':''}`}  
        onChange={handleEmail} ></input>
        {errors.email && <div className='invalid-feedback'>{errors.email}</div> }
    </div>
     <button className='btn btn-success' onClick={saveEmp} >Submit</button>
   </form>
  </div>
</div>
           </div>
        
    </div>
  )
}

export default EmployeeComponent