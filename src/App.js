import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Policy from "./Component/Policy";
import Error from "./Component/Error";
import List from "./Component/List";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <List />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
        <Route path="/policy" Component={Policy} />
        <Route Component={Error} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
