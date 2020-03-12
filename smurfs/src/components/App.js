import React from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import Form from "./Forms";

function App() {
    return (
      <div className="App">
         <h1>Welcome to the Smurf Village!</h1>
        <Form/>
        <SmurfList/>
      </div>
    );
}

export default App;