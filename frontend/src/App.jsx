import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Laptops from "./pages/Laptops";
import Desktops from "./pages/Desktops";
import Accessories from "./pages/Accessories";
import { Discount } from "./pages/Discount";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";



function App() {
  return (
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
        <Route path="userdashboard" element={ <ProtectedRoute><UserDashboard /></ProtectedRoute> } />
        <Route path="checkout" element={ <ProtectedRoute><Checkout /></ProtectedRoute> } />
      </Route>
    </Routes>
  );
}

export default App;
