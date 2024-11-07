import axios from "axios";
import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeServices";
import { useNavigate } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function saveEmployee(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    console.log(employee);
    createEmployee(employee).then((response) => {
      console.log(response);
    });
    navigate("/employees");
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Employee First Name"
                  value={firstName}
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Employee Last Name"
                  value={lastName}
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Employee Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
