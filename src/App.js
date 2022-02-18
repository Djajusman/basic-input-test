import React, { useState } from "react";

function test(){
  var s = document.getElementById("name").value;
  document.getElementById("show").innerHTML = s;
}

function App() {
  const [name, setName]=useState("");

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <p>Test</p>
      <input type="text" id="name" name="name" value={name} onChange={handleChange}/>
      <button onClick={()=>{test()}}> Show</button>
      <p id="show"></p>

    </div>
  );
}

export default App;
