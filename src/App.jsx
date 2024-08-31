import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Market from "./components/Market";
import CardOptions from "./components/CardOptions";
import Buisness from "./components/Buisness";
import Development from "./components/Development";
import Footer from "./components/Footer";
import Coin from "./components/Coin";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Market />
              <CardOptions />
              <Buisness />
              <Development />
              <Footer />
            </>
          }
        />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </>
  );
};

export default App;
