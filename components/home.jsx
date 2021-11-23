import React, { Component } from "react";
import EmpTable from "./empTable";

class Home extends Component {
  state = {
    count: 0,
    employee: {
      empId: 1001,
      empName: "Parthu",
      salary: 45000,
    },
    employees: [
      {
        empId: 1002,
        empName: "Naveen",
        salary: 55000,
      },
      {
        empId: 1003,
        empName: "Yash",
        salary: 45000,
      },
      {
        empId: 1004,
        empName: "Raj",
        salary: 65000,
      },
      {
        empId: 1005,
        empName: "Vijay",
        salary: 25000,
      },
      {
        empId: 1006,
        empName: "Samara",
        salary: 55000,
      },
    ],
  };
  render() {
    return (
      <div>
        <EmpTable
          employees={this.state.employees}
          count={this.state.count}
          employee={this.state.employee}
        />
      </div>
    );
  }
}

export default Home;
