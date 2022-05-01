import React from 'react';
import propTypes from "prop-types";

 function LastName({lastName}) {
  return (
   <span style={{color:"whitesmoke", fontWeight:"bold", fontSize:"20px", margin:"0 5px"}}>{lastName}</span>
  );
}

LastName.propTypes = {};
export default LastName;