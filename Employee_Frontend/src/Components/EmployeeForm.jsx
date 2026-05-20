import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeForm = () => {
  
  const [values, setValues] = useState({
    name : '',
    age : '',
    Email : '',
    phoneNo : '',
    Department : '',
    salary : '',
  });

 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://localhost:7161/api/Employee', values)
    .then(res => {
      console.log(res);
      alert('Employee added successfully!');
      
    })
    .catch(err => console.log(err));
    console.log(values);
    
  }
 
  return (
    <div className="card mb-4 ">
      <div className="card-header bg-primary text-white text-center mt-3 mb-5">
        <h4>Add New Employee</h4>
      </div>
      <div className="card-body mx-5">
        <form onSubmit={handleSubmit}>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
              onChange={(e) => setValues({...values,name : e.target.value})}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Age</label>
              <input
                type="number"
                name="age"
                className="form-control"
              onChange={(e) => setValues({...values, age : e.target.value})}
                required
                min="18"
                max="65"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
              onChange={(e) => setValues({...values,email : e.target.value})}
                
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Phone No</label>
              <input
                type="tel"
                name="phoneNo"
                className="form-control"
              onChange={(e) => setValues({...values,phoneNo : e.target.value})}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Salary</label>
              <input
                type="salary"
                name="salary"
                className="form-control"
              onChange={(e) => setValues({...values,salary : e.target.value})}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Department</label>
              <select
                name="department"
                className="form-control"
              onChange={(e) => setValues({...values,Department : e.target.value})}
              >
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Admin">Admin</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-5 mt-5 card-footer">
          <button type="submit" className="btn btn-success " >
            Submit
          </button>

          <Link to="/">
         <button type="reset" className="btn btn-danger ml-2 " >
            Lists Of Employees
          </button>
          </Link>
          </div>
         
        </form>
        
        
      </div>
    </div>
  );
};

export default EmployeeForm;