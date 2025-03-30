import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Warehouses from "./pages/Warehouses";
import About from "./pages/About";


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Warehouses" element={<Warehouses />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
