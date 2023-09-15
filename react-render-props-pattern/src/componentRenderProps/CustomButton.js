import React, { useEffect, useState } from "react";

function CustomButton({ renderPropsFunction }) {
  console.log(renderPropsFunction);
  return <div>{renderPropsFunction("Save")}</div>;
}

export default CustomButton;
