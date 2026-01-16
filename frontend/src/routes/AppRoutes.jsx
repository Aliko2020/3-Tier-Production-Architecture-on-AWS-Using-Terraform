import { Routes, Route } from "react-router-dom";

import Layout from "@/layouts/Layout";
import ProtectedRoute from "@/components/common/ProtectedRoute";

import Home from "@/pages/home/Home";
import ProductDetail from "@/pages/products/ProductDetail";
import Laptops from "@/pages/products/Laptops";
import Desktops from "@/pages/products/Desktops";
import Accessories from "@/pages/products/Accessories";
import Discount from "@/pages/home/Discount";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import UserDashboard from "@/pages/dashboards/UserDashboard";
import Checkout from "@/pages/checkout/Checkout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Auth */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />

        {/* Products */}
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="laptops" element={<Laptops />} />
        <Route path="desktops" element={<Desktops />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="discounts" element={<Discount />} />

        {/* Protected */}
        <Route
          path="userdashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
