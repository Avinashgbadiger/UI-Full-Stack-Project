import './App.css'

import ListEmployeeComponent from './assets/components/ListEmployeeComponent'
import HeaderComponent from './assets/components/HeaderComponent'
import FooterComponents from './assets/components/FooterComponents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './assets/components/EmployeeComponent'

function App() {
  return (
    <>
      <BrowserRouter >
        {/* Header Component */}
        <HeaderComponent />

        {/* Define Routes */}
        <Routes>
          {/* Route for Add Employee */}
          <Route path='/add-employee' element={<EmployeeComponent />} />

          {/* Route for the List of Employees */}
          <Route path='/' element={<ListEmployeeComponent />} />

          {/* You can add more routes here */}

          <Route path='/employees' element={<ListEmployeeComponent />} />
          {/* // http://localhost:5000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
        </Routes>

        {/* Footer Component */}
        <FooterComponents />
      </BrowserRouter>
    </>
  )
}

export default App
