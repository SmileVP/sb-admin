import React, { useReducer, useState } from "react";
import { TodoReducer, initialValues } from "./ReducerComponent/TodoReducer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Actions } from "./ReducerComponent/action";

function Todo() {
  const [state, dispatch] = useReducer(TodoReducer, initialValues); //dispatch to call todo reducer

  const [name, setName] = useState("");

  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>Today's Task</h1>
      <Form.Group className="mb-3">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          value={name}
          placeholder="Enter Tasks"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => {
          //sending arguments to action parameter in todo reducer
          dispatch({ type: Actions.ADD, payload: name });
          setName(""); //to make the input empty
        }}
      >
        Create
      </Button>
      <br />
      <br />
      <Button
        variant="primary"
        onClick={() => {
          //sending arguments to action parameter in todo reducer
          dispatch({ type: Actions.CLEAR });
        }}
      >
        Clear All
      </Button>

      <div style={{ textAlign: "center" }}>
        {state.data.map((e, i) => {
          return (
            <div key={i}>
              {e.completed ? (
                <li
                  onClick={() => {
                    //sending arguments to action parameter in todo reducer
                    dispatch({
                      type: Actions.CHANGE,
                      payload: { index: i, completed: false },
                    });
                  }}
                >
                  <s>{e.name}</s>
                </li>
              ) : (
                <li
                  onClick={() => {
                    //sending arguments to action parameter in todo reducer
                    dispatch({
                      type: Actions.CHANGE,
                      payload: { index: i, completed: true },
                    });
                  }}
                >
                  {e.name}
                </li>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
