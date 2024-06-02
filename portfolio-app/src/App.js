import "./App.css";
import { useState } from "react";
import MainLayout from "./layout/MainLayout";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("My Name Is: " + name);
  };

  return (
    <MainLayout>
      <div className="App">
        <br></br>

        <form onSubmit={handleSubmit}>
          <div>What is your name?</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </MainLayout>
  );
}

export default App;
