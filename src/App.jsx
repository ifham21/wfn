import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Support from "./pages/Support";
import About from "./pages/About";
import Signin from "./pages/Signin";
import DashboardUI from "./Dashboard/DashboardUI";
import DashboardComponent from "./Dashboard/DashboardComponent";
import Users from "./Dashboard/Users";
import Companies from "./Dashboard/Companies";
import Warehouses from "./pages/Warehouses";
import Bookings from "./Dashboard/Bookings";
import Inbox from "./Dashboard/Inbox";
import ToDo from "./Dashboard/ToDo";
import SettingsComponent from "./Dashboard/SettingsComponent";

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dash"; // Check if route is /dash

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />} {/* Show Navbar only if not on Dashboard */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dash" element={<DashboardUI />} />
          <Route path="/DashboardComponent" element={<DashboardComponent />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Companies" element={<Companies />} />
          <Route path="/Warehouses" element={<Warehouses />} />
          <Route path="/Bookings" element={<Bookings />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="/SettingsComponent" element={<SettingsComponent />} />
          
        </Routes>
      </div>
      {!isDashboard && <Footer />} {/* Show Footer only if not on Dashboard */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
