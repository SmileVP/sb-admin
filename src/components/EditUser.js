import React, { useState, useEffect,useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {UserContext} from"./ContextComponent/UserContextComponent"

function EditUser() {
  let { id } = useParams();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let [timings, setTimings] = useState("");

  let navigate = useNavigate();
  let context=useContext(UserContext)

  let handleSubmit = () => {
    console.log(name, email, mobile, batch, timings);
    let newData = { name, email, mobile, batch, timings };
    let newArray = [...context.users];
    newArray.splice(id, 1, newData);
    context.setUsers(newArray);
    navigate('/dashboard');
  };

  // //without dependency array
  // useEffect(()=>{
  //   console.log("use effect triggered");
  // })

  //with empty dependency array
  useEffect(() => {
    if (id) {
      setName(context.users[id].name)
      setEmail(context.users[id].email)
      setMobile(context.users[id].mobile)
      setBatch(context.users[id].batch)
      setTimings(context.users[id].timings)
    } else {
      navigate('/dashboard')
    }
  }, [])


  //with dependency array
  // useEffect(()=>{
  //   console.log("use effect triggered");
  // },[mobile,timings])

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              value={mobile}
              placeholder="Enter Mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control
              type="text"
              value={batch}
              placeholder="Enter Batch"
              onChange={(e) => setBatch(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Session Timings</Form.Label>
            <Form.Select
              defaultValue={timings}
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

export default EditUser;
