import React, { useState } from "react";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {


  return (
  <div className="col-sm-4 d-grid gap-2">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
  </div>

  )
  }