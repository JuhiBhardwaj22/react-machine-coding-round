import React from "react";
import hocComponent from "./HocComponent";

const MyComponent = (props) => {
  console.log(props);
  return (
    <div>
      <div>Hello This is child component</div>
      <div>
        App Comp:- <h5>*{props.msgFromParent}*</h5>
      </div>
      <h1>Below functionality get from Parent HOC component</h1>
      <h5>{props.msg}</h5>
      <h5>{props.incVal}</h5>
    </div>
  );
};

export default hocComponent(MyComponent);
