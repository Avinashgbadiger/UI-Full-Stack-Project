import './App.css';
import ListEmployeeComponent from './assets/components/ListEmployeeComponent';
import HeaderComponent from './assets/components/HeaderComponent';
import FooterComponents from './assets/components/FooterComponents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeComponent from './assets/components/EmployeeComponent';

function App() {
  return (
    <BrowserRouter>
      {/* Header Component */}
      <HeaderComponent />

      {/* Main Content Section (Scrollable) */}
      <div className="main-content">
        <Routes>
          {/* Route for Add Employee */}
          <Route path='/add-employee' element={<EmployeeComponent />} />

          {/* Route for List of Employees */}
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path='/employees' element={<ListEmployeeComponent />} />

          {/* Route for Edit Employee */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
        </Routes>
      </div>

      {/* Footer Component */}
      <FooterComponents />
    </BrowserRouter>
  );
}

export default App;
