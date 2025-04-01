import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Google } from "@mui/icons-material";
import img from "../../src/warehouse1.png";

const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you can add authentication logic before navigating
    navigate("/dash");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block p-6">
          <img src={img} alt="Warehouse" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">Get Started Now</h2>
          <p className="text-gray-600">Log in to access portal, track progress, and manage requests.</p>

          <TextField label="Username" variant="outlined" fullWidth placeholder="Please enter your username" />
          <div className="h-1"></div> {/* Spacer between fields */}
          <TextField label="Password" type="password" variant="outlined" fullWidth />

          <div className="flex justify-between items-center">
            <FormControlLabel control={<Checkbox />} label="Remember Password" />
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Forgot Password?</a>
          </div>

          <Button variant="contained" fullWidth className="bg-black text-white py-3" onClick={handleLogin}>
            Login Now
          </Button>

          <Button variant="outlined" fullWidth startIcon={<Google />} className="py-3 border-gray-300">
            Continue with Google
          </Button>

          <p className="text-center text-gray-600">
            Don’t have an account? <a href="#" className="text-black">Sign Up here.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
