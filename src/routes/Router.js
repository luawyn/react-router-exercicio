import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
