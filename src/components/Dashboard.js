import React, { useContext } from "react";
import BasicCard from "./CardComponents/BasicCard";
import ProgressCard from "./CardComponents/ProgressCard";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ContextComponent/UserContextComponent";
import { DashboardContext } from "./ContextComponent/DashboardContextComponent";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

function Dashboard() {
  //to get the data from User Context
  let context = useContext(UserContext); //to overcome props drilling use context came
  let dash = useContext(DashboardContext);

  //for redirection
  let navigate = useNavigate();

  let handleDelete = (i) => {
    let newArray = [...context.users]; //deep copy the main array
    newArray.splice(i, 1); //delete the element in the new array
    context.setUsers(newArray); //update the new array to the state function
  };

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/*  <!-- Main Content --> */}

      <div id="content">
        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            
          </div>

          <div className="row">
            <BasicCard
              //passing the arguments to basic card function parameter
              label="Earnings (Monthly)"
              value={dash.earningsMonthly} //to get the value from dashboard context component
              icon="fa-calendar"
              border="primary"
            />
            <BasicCard
              label="Earnings (Annual)"
              value={dash.earningsYearly} //to get the value from dashboard context component
              icon="fa-dollar-sign"
              border="success"
            />
            <ProgressCard
              label=" Tasks "
              value={dash.task} //to get the value from dashboard context component
              icon="fa-clipboard-list"
              border="info"
            />
            <BasicCard
              label=" Pending Requests"
              value={dash.pendingRequest} //to get the value from dashboard context component
              icon="fa-comments"
              border="warning"
            />
          </div>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Batch</th>
                <th>Timings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* to display the table data from user context component */}
              {context.users.map((e, i) => {
                return (
                  <tr key={i}>
                    {" "}
                    {/* unique key */}
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.batch}</td>
                    <td>{e.timings}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/edit-user/${i}`)}
                      >
                        <i className="fas fa-pen-to-square"></i>Edit
                      </Button>
                      &nbsp; &nbsp;
                      <Button variant="danger" onClick={() => handleDelete(i)}>
                        <i className="fas fa-trash"></i>Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
