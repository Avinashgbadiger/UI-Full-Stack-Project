import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:9999/v1/api/emp';

export const listEmployees = () =>{
 
  return fetch('http://localhost:9999/v1/api/emp');     
 
    
}

export const createEmp =(employee) => axios.post(REST_API_BASE_URL+'/save-emp',employee);

 
export const getEmp = (empId) => {
//   return axios
//     .get(`${REST_API_BASE_URL}/${empId}`)
//     .then((response) => {
//       console.log('test');
//       return response.data;  // Return the employee data
//     })
//     .catch((error) => {
//       console.error("Error fetching employee:", error);
//       throw error;  // Re-throw error to be caught in the component
//     });
// };

  // return axios.get(REST_API_BASE_URL+'/'+empId);}

    return fetch('http://localhost:9999/v1/api/emp/'+empId);}


    export const updateEmp=(empId,employee) => axios.put(REST_API_BASE_URL+'/'+empId,employee);

    export const deleteEmp=(empId) => axios.delete(REST_API_BASE_URL+'/'+empId);

