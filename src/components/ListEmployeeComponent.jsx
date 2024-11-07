import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "sss@gmail.co2m",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
    },
    {
      id: 5,
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@example.com",
    },
    {
      id: 6,
      firstName: "David",
      lastName: "Evans",
      email: "david.evans@example.com",
    },
    {
      id: 7,
      firstName: "Eve",
      lastName: "Wilson",
      email: "eve.wilson@example.com",
    },
    {
      id: 8,
      firstName: "Frank",
      lastName: "Taylor",
      email: "frank.taylor@example.com",
    },
    {
      id: 9,
      firstName: "Grace",
      lastName: "Anderson",
      email: "grace.anderson@example.com",
    },
    {
      id: 10,
      firstName: "Hank",
      lastName: "Thomas",
      email: "hank.thomas@example.com",
    },
    {
      id: 11,
      firstName: "Ivy",
      lastName: "Jackson",
      email: "ivy.jackson@example.com",
    },
    {
      id: 12,
      firstName: "Jack",
      lastName: "White",
      email: "jack.white@example.com",
    },
    {
      id: 13,
      firstName: "Karen",
      lastName: "Harris",
      email: "karen.harris@example.com",
    },
    {
      id: 14,
      firstName: "Leo",
      lastName: "Martin",
      email: "leo.martin@example.com",
    },
    {
      id: 15,
      firstName: "Mia",
      lastName: "Garcia",
      email: "mia.garcia@example.com",
    },
    {
      id: 16,
      firstName: "Nina",
      lastName: "Martinez",
      email: "nina.martinez@example.com",
    },
    {
      id: 17,
      firstName: "Oscar",
      lastName: "Robinson",
      email: "oscar.robinson@example.com",
    },
    {
      id: 18,
      firstName: "Paul",
      lastName: "Clark",
      email: "paul.clark@example.com",
    },
    {
      id: 19,
      firstName: "Quinn",
      lastName: "Rodriguez",
      email: "quinn.rodriguez@example.com",
    },
    {
      id: 20,
      firstName: "Rita",
      lastName: "Lewis",
      email: "rita.lewis@example.com",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center">List of Employee Information</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
