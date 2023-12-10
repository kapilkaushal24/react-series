// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {

  // let myobj = {
  //   name: "Kapil",
  //   age: 24
  // }

  // let newarray = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username = "Tailwind Css" btnText = "click me"/>
      <Card username = "kapil" btnText = "Visit me"/>
    </>
  );
}

export default App;
