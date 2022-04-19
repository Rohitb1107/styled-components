import { useState } from "react";
// import logo from './logo.svg'
import "./App.css";
import Button from "./components/Buttons/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, Rohit!</h1>
      {/* <Button name={"prev"} />
      <Button name={"now"} />
      <Button name={"next"} /> */}
     <button>Hello</button>
    </>
  );
}

export default App;
