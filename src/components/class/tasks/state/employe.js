import React, { Component } from "react";
class EmployeeData extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        { id: 1, name: "Deepu", role: "Manager" },
        { id: 2, name: "Anu", role: "Designer" },
        { id: 3, name: "Praveen", role: "Developer" },
        { id: 4, name: "Pavani", role: "Manager" },
        { id: 5, name: "Sweety", role: "Designer" },
        { id: 6, name: "Ruthu", role: "Designer" },
      ],
      selectedRole: null,
      filteredEmployees: [], // New state for filtered employees
    };
  }
  // Function to filter employees based on role
  filterEmployeesByRole = (role) => {
    const filteredEmployees = this.state.employees.filter(
      (employee) => employee.role === role
    );
    this.setState({ selectedRole: role, filteredEmployees });
  };
  // Function to displaying all employees
  showAllEmployees = () => {
    this.setState({
      selectedRole: null,
      filteredEmployees: this.state.employees,
    });
  };
  render() {
    const { selectedRole, filteredEmployees } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.showAllEmployees}>All</button>
          <button onClick={() => this.filterEmployeesByRole("Manager")}>
            Managers
          </button>
          <button onClick={() => this.filterEmployeesByRole("Designer")}>
            Designers
          </button>
          <button onClick={() => this.filterEmployeesByRole("Developer")}>
            Developers
          </button>
        </div>
        <h2>Employee List</h2>
        {(selectedRole || selectedRole === null) && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default EmployeeData;