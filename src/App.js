import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./content/Home/Home";
import Contacts from "./content/Contacts/Contacts";
import About from "./content/About/About";
import Projects from "./content/Projects/Projects";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

function App() {
  const location = useLocation();
  // const [loaded, isLoaded] = useState(null);

  // useEffect(() => {
  //   document.addEventListener("load", () => {
  //     setTimeout(() => {
  //       isLoaded(true);
  //     }, 1000);
  //   });
  // });

  return (
    <div className="App">
      <LazyMotion features={domAnimation}>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}

export default App;
