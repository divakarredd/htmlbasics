import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class furnitureuser extends React.Component {
  state = {
    furnitureusers: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/getUser")
      .then((response) => this.setState({ furnitureuser: response.data }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <Link
          to="/addfurnitureuser"
          className="btn btn-info btn-large  float-end mb-1 mt-1"
        >
          Add
        </Link>
        <table className="table table-striped table-dark  mx-auto mt-5 ">
          <thead>
            <tr>
              <th>uId</th>
              <th>name</th>
              <th>mobileNo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.furnitureusers.map((furniture) => (
              <tr>
                <td>furnitureuser.uId</td>
                <td>furnitureuser.name</td>
                <td>furnitureuser.mobileNo</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default furnitureuser;
