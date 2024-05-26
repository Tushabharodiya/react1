import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Shope from "./components/pages/Shope";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Productdetaile from "./components/pages/Productdetaile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shope" element={<Shope />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Productdetaile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
