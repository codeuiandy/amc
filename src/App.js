import React, { useState,useEffect } from "react";
import './App.css';
import Home from './home/index'
function App() {

  const [loading,setLoading]=useState(true)
  // if (document.readyState !== "complete") {
  //   setLoading(true)
  // }

  useEffect(() => {
    window.addEventListener('load', function() {
      setLoading(false)
  })
  }, [])
 


  return (
  
      <Home/>
    

  );
}

export default App;
