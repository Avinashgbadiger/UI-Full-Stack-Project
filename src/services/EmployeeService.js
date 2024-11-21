import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:9999/v1/api/emp';

export const listEmployees = () =>{
 
  return fetch('http://localhost:9999/v1/api/emp');     
 
    
}

export const createEmp =(employee) => axios.post(REST_API_BASE_URL+'/save-emp',employee);
export const getEmp =(empId) => {
  // axios.post(REST_API_BASE_URL+'/'+empId)

  return fetch('http://localhost:9999/v1/api/emp'+'/'+empId);

};