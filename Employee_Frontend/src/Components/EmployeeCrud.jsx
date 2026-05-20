
import {useEffect} from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { deleteEmployee,getEmployees,updateEmployee  } from '../Services/EmployeeService';

function EmployeeCrud({refresh}) {



    const [employees, setEmployees] = useState([]);
   const [editEmployee, setEditEmployee] = useState(null);

     useEffect(() => {

        fetchEmployees();

    }, [refresh]);

   

     const fetchEmployees = async () => {

        try {

            const response = await getEmployees();

            setEmployees(response.data);

        } catch (error) {

            console.log(error);
        }
    };

      const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            'Are you sure you want to delete this employee?'
        );

        if(confirmDelete) {

            try{
            await deleteEmployee(id);
                alert("Employee deleted successfully!");
            fetchEmployees();

        } catch (error) {

            console.log(error);
        }
     }
    };
      const handleEditChange = (e) => {

        setEditEmployee({
            ...editEmployee,
            [e.target.name]: e.target.value ,
           
        });
    };

     const handleUpdate = async () => {

        try {

            await updateEmployee(editEmployee.id, editEmployee);

            setEditEmployee(null);

            fetchEmployees();

        } catch (error) {

            console.log(error);
        }
    };

  
  
  return (
           <div className="card mb-6 ">
      <div className="card-header bg-primary text-white text-center mt-3 mb-5">
        <h4>LISTS OF EMPLOYEES</h4>
      </div>
      <div className="card-body">


        <table className="table table-dark table-striped-columns table-hover table-responsive"
         style={{ tableLayout: "fixed" }}
        >
            
            <thead class="table-dark"> 
                <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>   
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody class="table-light fixed-table-body">
                {
                    employees.map((item) => (    
                        <tr key={item.id}>
                           
                            {/* <td>{item.id}</td> */}
                            <td> {
                                    editEmployee?.id === item.id
                                            ? (
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editEmployee.name}
                                                    onChange={handleEditChange}
                                                />
                                            )
                                            : item.name
                                            
                                }</td>
                               <td>{
                                  editEmployee?.id === item.id
                                       ?(
                                        <input
                                        type="number"
                                        name="age"
                                        value={editEmployee.age}
                                        onChange={handleEditChange}
                                        />
                                       )
                                       : item.age }</td>
                            
                             <td>{ editEmployee?.id === item.id
                                       ?(
                                        <input
                                        type="email"
                                        name="email"
                                        value={editEmployee.email}
                                        onChange={handleEditChange}
                                        />
                                       )
                                       : item.email }</td>
                           
                             <td>{ editEmployee?.id === item.id
                                       ?(
                                        <input
                                        type="phoneNo"
                                        name="PhoneNo"
                                        value={editEmployee.phoneNo}
                                        onChange={handleEditChange}
                                        />
                                       )
                                       : item.phoneNo }</td>
                            <td>{ editEmployee?.id === item.id
                                       ?(
                                        <input
                                        type="department"
                                        name="department"
                                        value={editEmployee.department}
                                        onChange={handleEditChange}
                                        />
                                       )
                                       : item.department }</td>
                            <td>{ editEmployee?.id === item.id
                                       ?(
                                        <input
                                        type="salary"
                                        name="salary"
                                        value={editEmployee.salary}
                                        onChange={handleEditChange}
                                        />
                                       )
                                       : item.salary }</td>
                            <td >
                                {
                                       editEmployee?.id === item.id
                                            ? (
                                                <button onClick={handleUpdate}>
                                                    Save
                                                </button>
                                            )
                                            : (
                                              <Link to="/EmployeeEdit"><button
                                                    onClick={() => setEditEmployee(item)}
                                                >
                                                    Edit
                                                </button>
                                                </Link>  
                                            )
                                }
                                &nbsp; &nbsp;
                                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                            </tr>
                    ))
                }
            </tbody>
    </table>
    </div>
    <div className="card-footer d-flex justify-content-center">
    <Link to="/EmployeeForm">
        <button className='btn btn-success ' >Add Employee</button>
    </Link>
    </div>
    </div>
  )
}

export default EmployeeCrud