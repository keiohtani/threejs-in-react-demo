import React from "react";
import "./App.css";
import Renderer from "./Renderer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "100vh", width: "100vw" }}>
          <Renderer />
        </div>
      </header>
    </div>
  );
}

export default App;
