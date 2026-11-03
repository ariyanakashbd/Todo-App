
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Forgot from "./pages/Forgot";
import Regestaion from "./pages/Regestaion";
import Reset from "./pages/Reset";
import EmailVerify from "./pages/EmailVerify";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="/register" element={<Regestaion />} />
      <Route path="/reset-password" element={<Reset />} />
      <Route path="/verify-email" element={<EmailVerify />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
