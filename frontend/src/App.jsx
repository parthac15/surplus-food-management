import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />   {/* ✅ Add this */}
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />     {/* ✅ Add this */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />     {/* ✅ Add this */}
      </Routes>
    </Router>
  );
}

export default App;
