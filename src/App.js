import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./content/Home/Home";
import Contacts from "./content/Contacts/Contacts";
import About from "./content/About/About";
import Projects from "./content/Projects/Projects";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <div className="clipPath"></div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
