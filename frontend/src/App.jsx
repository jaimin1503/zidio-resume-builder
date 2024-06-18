//import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Card from "./components/Card";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FillDetails from "./pages/FillDetails";
import Templates from "./pages/Templates";
import MyResumes from "./pages/MyResumes";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="w-screen h-screen min-w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fillDetails" element={<FillDetails />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/myresumes" element={<MyResumes />} />
      </Routes>
    </div>
  );
}

export default App;
