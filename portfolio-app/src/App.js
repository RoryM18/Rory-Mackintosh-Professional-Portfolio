import HelloWorld from "./components/HelloWorld";

import './App.css'
import Sample from "./components/Sample";
import Navbar from "./components/Navbar";

function App() {
const saygoodbye = "See You Again"
const number = 15;
const num = 18;
const name = "Rory";

  return (
    <div className="App">
      <Navbar></Navbar>
      <HelloWorld numberprops={num} name={name}/>
      <div>{saygoodbye} {number + number}</div>
      <div className="sample-css">Hello App CSS</div>

      <Sample></Sample>

    </div>
  );
}

export default App;
