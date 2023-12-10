import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addvalue = () => {
    // console.log("Clicked", counter);
    // counter = counter + 1
    if (counter <= 19) {
      setCounter(counter + 1);
    }
    else
    {
      alert("You have reached the maximum limit");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else{
      alert("You have reached the maximum limit");
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
