import React from "react";

const DemoOutput = (props) => {
 
  return <p>{props.show ? 'this i the new! ' :  ''}</p>
};

export default React.memo(DemoOutput)