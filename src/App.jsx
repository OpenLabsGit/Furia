import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Web from "./pages/products/Web";
import VPS from "./pages/products/VPS";
import Node from "./pages/products/Node";
import Python from "./pages/products/Python";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from './pages/Error/404';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/web" element={<Web />} />
        <Route path="/products/vps" element={<VPS />} />
        <Route path="/products/node" element={<Node />} />
        <Route path="/products/python" element={<Python />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
