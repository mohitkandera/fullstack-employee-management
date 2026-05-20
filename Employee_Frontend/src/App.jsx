import  { useState } from 'react';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeCrud from './Components/EmployeeCrud';
import EmployeeEdit from './Components/EmployeeEdit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
const [refresh, setRefresh] = useState(false);

  const fetchEmployees = () => {
    setRefresh(!refresh);
  }


  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<EmployeeCrud/>} />
         <Route path="/EmployeeForm" element={<EmployeeForm fetchEmployees={fetchEmployees}/>} />
         <Route path="/EmployeeEdit" element={<EmployeeEdit refresh={refresh}  />} /> 
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;