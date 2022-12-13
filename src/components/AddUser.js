import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ContextComponent/UserContextComponent";

function AddUser() {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let [timings, setTimings] = useState("");

  //to get the value from user context
  let context = useContext(UserContext);

  //for redirection
  let navigate = useNavigate();

  let handleSubmit = () => {
   

    let newData = { name, email, mobile, batch, timings };    //to get the new data of users
    let newArray = [...context.users]; //to get the details of old users
    newArray.push(newData);//pushing the new data to old data
    context.setUsers(newArray);//updating the users details
    navigate("/dashboard");//navigating to dashboard
  };

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"

              // to update the name state
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"

              //to update the email state
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile"
              //to update the mobile state
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Batch"
              //to update the batch state
              onChange={(e) => setBatch(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Session Timings</Form.Label>
            <Form.Select
              defaultValue={"0"}
              //to update the timings state
              onChange={(e) => setTimings(e.target.value)}
            >
              <option value="0" disabled>
                Session Timings
              </option>
              <option value="10AM-12PM">10AM-12PM</option>
              <option value="12PM-2PM">12PM-2PM</option>
              <option value="2PM-4PM">2PM-4PM</option>
              <option value="4PM-6PM">4PM-6PM</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddUser;
