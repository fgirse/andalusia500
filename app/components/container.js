import React from "react";
import { archidaught } from "../../utils/fonts";

const Container = (props) => {
  return (
    <div className={archidaught.className}>
          <div
      className={`container p-8 mx-auto lg:p-0  xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>


    </div>
    
  );
}

export default Container;