import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "@/layouts/Layout";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import Spinner from "@/components/common/Spinner"; 

/* Lazy-loaded pages */
const Home = lazy(() => import("@/pages/home/Home"));
const Discount = lazy(() => import("@/pages/Discount"));
const Laptops = lazy(() => import("@/pages/products/Laptops"));
const Desktops = lazy(() => import("@/pages/products/Desktops"));
const Accessories = lazy(() => import("@/pages/products/Accessories"));
const ProductDetail = lazy(() => import("@/pages/products/ProductDetail"));

import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import UserDashboard from "@/pages/dashboards/UserDashboard";
import Checkout from "@/pages/checkout/Checkout";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />

          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="laptops" element={<Laptops />} />
          <Route path="desktops" element={<Desktops />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="discounts" element={<Discount />} />

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
    </Suspense>
  );
};

export default AppRoutes;
