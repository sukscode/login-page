import React from "react";
import Login from "./Login";

var isLoggedIn=true;
var dayName =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = dayName[new Date().getDay()];

function App() {
  return (
    <div className="container">{
    (isLoggedIn===true)?<div><h1>Hello {day}!</h1><h3>You are still working</h3></div>:<Login />
    }
    </div>
  );
}

export default App;