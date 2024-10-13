import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../features/employeSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Employe = () => {
    const dispatch = useDispatch();
    const { employees, status, error } = useSelector((state) => state.employees);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleShowDetails = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleCloseDetails = () => {
        setSelectedEmployee(null);
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1>Employee List</h1>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by Name"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.company.name}</td>
                            <td>
                                <button
                                    className="btn btn-info"
                                    onClick={() => handleShowDetails(employee)}
                                >
                                    Show Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedEmployee && (
                <div className="alert alert-info mt-3">
                    <h4>Employee Details</h4>
                    <p><strong>ID:</strong> {selectedEmployee.id}</p>
                    <p><strong>Name:</strong> {selectedEmployee.name}</p>
                    <p><strong>Email:</strong> {selectedEmployee.email}</p>
                    <p><strong>Phone:</strong> {selectedEmployee.phone}</p>
                    <p><strong>Website:</strong> {selectedEmployee.website}</p>
                    <p><strong>Company:</strong> {selectedEmployee.company.name} {selectedEmployee.company.catchPhrase}</p>
                    <p><strong>Address:</strong> {selectedEmployee.address.street}, {selectedEmployee.address.city}, {selectedEmployee.address.zipcode}</p>
                    <button className="btn btn-secondary" onClick={handleCloseDetails}>
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default Employe;
