import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Market from "./components/Market";
import CardOptions from "./components/CardOptions";
import Buisness from "./components/Buisness";
import Development from "./components/Development";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Market />
      <CardOptions />
      <Buisness />
      <Development />
      <Footer />
    </>
  );
};

export default App;
