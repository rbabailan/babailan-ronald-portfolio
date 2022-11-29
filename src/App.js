import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./content/Home/Home";
import Contacts from "./content/Contacts/Contacts";
import About from "./content/About/About";
import Projects from "./content/Projects/Projects";

function App() {
  useEffect(() => {
    document.title = "Babailan's Portfolio";
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
