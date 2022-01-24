import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { CustomCursor } from "./components/CustomCursor";
import Body from "./components/Body";
import View from "./components/View";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Header />
      <Body />
      <View />
      <Footer />
    </div>
  );
}

export default App;
