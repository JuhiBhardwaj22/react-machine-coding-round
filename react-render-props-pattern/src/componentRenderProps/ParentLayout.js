import React from "react";
import CustomButton from "./CustomButton";

const ParentLayout = () => {
  return (
    <div>
      <h1>heloooo</h1>
      <CustomButton
        renderPropsFunction={(text) => (
          <button style={{ backgroundColor: "blue", color: "white" }}>
            {text}
          </button>
        )}
      />
      <CustomButton
        renderPropsFunction={(text) => (
          <button style={{ backgroundColor: "green", color: "white" }}>
            {text}
          </button>
        )}
      />
    </div>
  );
};

export default ParentLayout;
