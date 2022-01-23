import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { CustomCursor } from "./components/CustomCursor";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
