import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const Add = () => {
    // console.log("Clicked", counter)
    if(counter <= 9)
    {
      counter = counter + 1;
      setCounter(counter);
    }
    else
    {
      alert("Limit reached");
    }
  };

  const Remove = () => {
    if(counter >0 ){
      setCounter(counter - 1)
    }
    else
    {
      alert("Negative Values not allowed")
    }
  };

  return (
    <>
      <h1>My first react </h1>
      <h3>Counter Value:{counter}</h3>
      <button onClick={Add}>Add Value</button>
      <br></br>
      <br></br>
      <button onClick={Remove}>Remove Value</button>
    </>
  );
}

export default App;
