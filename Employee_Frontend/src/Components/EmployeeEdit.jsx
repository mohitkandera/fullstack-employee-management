import  { useEffect, useState } from "react";

import { updateEmployee } from "../services/EmployeeService";
// import { updateEmployee } from "../Components/EmployeeCrud.jsx";

function EditEmployee({
    selectedEmployee,
    fetchEmployees,
    closeEdit
}) {

    const [employee, setEmployee] = useState({
        id: 0,
        name: "",
        age: "",
        email: "",
        salary: "",
        department: ""
    });

    // Load Selected Employee
    useEffect(() => {

        if (selectedEmployee) {

            setEmployee(selectedEmployee);
        }

    }, [selectedEmployee]);

    // Handle Input
    const handleChange = (e) => {

        const { name, value } = e.target;

        setEmployee({
            ...employee,
            [name]:
                name === "age" || name === "salary"
                    ? Number(value)
                    : value
        });
    };

    // Save Updated Employee
    const handleSubmit = async (e) => {

        e.preventDefault();
        updateEmployee(employee.id, employee);

        try {

            await updateEmployee(
                employee.id,
                employee
            );

            alert("Employee Updated Successfully");

            fetchEmployees();

            closeEdit();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="container mt-4">

            <div className="card p-4 shadow">

                <h2 className="text-center mb-4">
                    Edit Employee
                </h2>

                <form onSubmit={handleSubmit}>

                    {/* NAME */}
                    <div className="mb-3">

                        <label className="form-label">
                            Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={employee.name}
                            onChange={handleChange}
                        />

                    </div>

                    {/* AGE */}
                    <div className="mb-3">

                        <label className="form-label">
                            Age
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            name="age"
                            value={employee.age}
                            onChange={handleChange}
                        />

                    </div>

                    {/* EMAIL */}
                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                        />

                    </div>

                    {/* SALARY */}
                    <div className="mb-3">

                        <label className="form-label">
                            Salary
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            name="salary"
                            value={employee.salary}
                            onChange={handleChange}
                        />

                    </div>

                    {/* DEPARTMENT */}
                    <div className="mb-3">

                        <label className="form-label">
                            Department
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                        />

                    </div>

                    {/* BUTTONS */}
                    <div className="d-flex gap-2">

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Save Changes
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeEdit}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default EditEmployee;