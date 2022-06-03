import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/card";
import Product from "./components/product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/details:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
