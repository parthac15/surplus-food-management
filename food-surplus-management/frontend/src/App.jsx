import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import BuyerDashboard from "./pages/BuyerDashboard.jsx";
import SellerDashboard from "./pages/SellerDashboard.jsx";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/seller" element={<SellerDashboard />} />
            <Route path="/buyer" element={<BuyerDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    </Router>
);

export default App;
