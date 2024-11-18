import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:9999/v1/api/emp'

export const listEmployees = () =>{
   // return axios.get(REST_API_BASE_URL);
  // return fetch('https://api.example.com/data')
  return fetch('http://localhost:9999/v1/api/emp');     
//   .then(response => response.json())
//   .then(data => {
//     console.log('h1',data)
//     //setEmployees(data);
//     }).catch(error => console.error(error));
    
}