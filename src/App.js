import React from "react";
import "./styles.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Drum Machine</h1>
      <Main />
      <Footer />
    </div>
  );
}
