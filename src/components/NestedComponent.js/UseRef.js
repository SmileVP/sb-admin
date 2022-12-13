import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";

//to avoid infinite re-rendering
function UseRef() {
  let [name, setName] = useState("");
  let count = useRef(0);

  let rollRef = useRef(null);

  //without dependency array
  //triggered automatically even if there is no state change happening
  useEffect(() => {
    count.current = count.current + 1;
  });
  
  return (
    <div className="container-fluid">
      <h1>Use Ref Example</h1>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br />
      <span>{count.current}</span>
      <br />
      <input type="text" placeholder="Roll no." ref={rollRef} />
      <br />
      <br />

      <Button variant="primary" onClick={() => rollRef.current.focus()}>
        Click me to focus
      </Button>
    </div>
  );
}

export default UseRef;
