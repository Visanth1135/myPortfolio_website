import React, { useState } from 'react'

import './form.css';
const Signin = ({submit}) => {
  
  return (
    <div className="container">
    <input type="text" placeholder="Your name.."></input>
    <input type="text" placeholder="Last name.."></input>
    <input type="text" placeholder="Age"></input>
    <input type="text" placeholder="Place"></input>
    <button onClick={()=>submit()}>Submit</button>
    </div>
  );
};

export default Signin;
