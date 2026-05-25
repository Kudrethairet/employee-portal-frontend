import React, { useState, useEffect } from 'react';
import './Employees.css';

interface User {
  name: string;
  role: string;
  department: string;
}

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface EmployeesProps {
  user: User;
}

function Employees({ user }: EmployeesProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('/api/employees')
      .then((res) => res.json())
      .then((data: Employee[]) => setEmployees(data))
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <>
      <h2>Employees</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp: Employee) => (
            <tr key={emp.id}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Employees;