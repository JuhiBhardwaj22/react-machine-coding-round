import React, { useState } from "react";

const hocComponent = (ChildComponent) => {
  function HocComponent() {
    const [count, setCount] = useState(1);
    const incCount = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <ChildComponent msg="HOC component" incVal={count} />
        <button style={{ height: "35px" }} onClick={incCount}>
          Increament+
        </button>
      </div>
    );
  }
  return HocComponent;
};

export default hocComponent;
