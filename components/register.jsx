import React, { Component } from "react";

class Register extends React.Component {
  render() {
    return (
      <div class="container">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputFirstname" class="form-label">
              FirstName
            </label>
            <input type="firstname" class="form-control" id="inputfirstname" />
          </div>
          <div class="col-md-6">
            <label for="inputlastname" class="form-label">
              LastName
            </label>
            <input type="lastname" class="form-control" id="inputlastname" />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword" />
          </div>
          <div class="form-control">
            <select>
              <option>Choose Gender..</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
