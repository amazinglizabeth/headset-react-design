import React from "react";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Info from "./src/components/Info";
import Products from "./src/components/Products";
import DealData from "./src/components/DealData";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Products />
      <DealData />
      <Footer />
    </>
  );
}
