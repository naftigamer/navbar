import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/contact-us" exact element={<Contact />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
