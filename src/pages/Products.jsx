import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Products() {
  return (
    <>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/web">Web Hosting</Link>
        </li>
        <li>
          <Link to="/products/vps">VPS Hosting</Link>
        </li>
        <li>
          <Link to="/products/node">Node.js Hosting</Link>
        </li>
        <li>
          <Link to="/products/python">Python Hosting</Link>
        </li>
      </ul>
    </>
  );
}

export default Products;
