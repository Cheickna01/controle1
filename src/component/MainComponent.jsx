import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./HeaderComponent";
import ContactUs from "./ContactUs";
import Panier from "./Panier";
import Login from "./Login";
import Home from "./Home";
import ProductDetailComponent from "./ProductDetailComponent";
import { useSelector } from "react-redux";
import SearchComponent from "./SearchComponent";
export default function Main() {
  const produits = useSelector((state) => state.Products);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
        <Route
          path="/home/:id"
          element={<ProductDetailComponent produit={produits} />}
        />
        <Route
          path="/search/:name"
          element={
            <SearchComponent
              produits={produits}
            />
          }
        />
      </Routes>
    </>
  );
}
