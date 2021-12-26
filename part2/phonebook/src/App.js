import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';






const App = () => {
  const [person, setPerson] = useState([])
  const hook = ()=> {
    axios.get("http://localhost:3001/persons").then(resposes => setPerson(resposes.data))
  }
  useEffect(hook, [])
  return null

}

export default App;
