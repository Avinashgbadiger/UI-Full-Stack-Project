 
import './App.css'
 
import ListEmployeeComponent from './assets/components/ListEmployeeComponent'
import HeaderComponent from './assets/components/HeaderComponent'
import FooterComponents from './assets/components/FooterComponents'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './assets/components/EmployeeComponent'

function App() {
   
  return (
    <>
     <BrowserRouter>
      
    <HeaderComponent />
       <Routes>
        {/* // http://localhost:5000/ */}

 {/* // http://localhost:5000/emp */}


{/* //http://localhost:5000/add-employee */}
<Route path='/add-employee' element={ <EmployeeComponent /> }></Route>

</Routes>
       
        <ListEmployeeComponent/>
        <FooterComponents />
        </BrowserRouter>
    </>
  )
}

export default App
