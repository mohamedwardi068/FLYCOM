import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./myComponents/Navbar";
import Footer from "./myComponents/Footer"; // Import the Footer
import ImageCarousel from "./pages/ImageCarousel";
import CategoryList from "./myComponents/CategoryCard";
import ProductsGrid from "./pages/ProductsGrid";
import QualityGoods from "./myComponents/QualityGoods";
import PopularProductsCarousel from "./myComponents/PopularProductsCarousel";

const App = () => {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<><ImageCarousel /><CategoryList /><ProductsGrid /><QualityGoods /><PopularProductsCarousel/></>} />

        </Routes>
        <Footer /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
};

export default App;
