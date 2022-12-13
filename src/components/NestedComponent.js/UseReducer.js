import React, { useReducer } from "react";

import { Button } from "react-bootstrap";

//using state function

// function UseReducer() {
//     let [count,setCount]=useState(0);
//   return <div className="container-fluid">
//     <h1>UseReducer</h1>
//     <div>
//     <Button variant="danger" onClick={()=>setCount(count-1)}>-</Button>
//     &nbsp;
//    {count}
//    &nbsp;
//     <Button variant="success" onClick={()=>setCount(count+1)}>+</Button>
//   </div>
//   </div>
// }

// export default UseReducer

//using use reducer

let initialValues = { count: 0, name: "" }; //setting the initial value

function Reducer(state, action) {

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return initialValues;

    case "updateName":
      return { ...state, name: action.value };

    default:
      return state;
  }
}

function UseReducer() {
  let [state, dispatch] = useReducer(Reducer, initialValues); //dispatch to call the reducer function

  return (
    <div className="container-fluid">
      <h1>UseReducer</h1>
      <div>
        <Button
          variant="danger"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </Button>
        &nbsp;
        {state.count}
        &nbsp;
        <Button
          variant="success"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </Button>
        <br></br>
        <br></br>
        &nbsp; &nbsp;
        <Button variant="warning" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
        <br></br>
        <br></br>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "updateName", value: e.target.value })
          }
        ></input>
        <div>{state.name}</div>
      </div>
    </div>
  );
}

export default UseReducer;
