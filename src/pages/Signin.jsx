import React from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Google } from "@mui/icons-material";
import img from "../../src/warehouse1.png"

const SignIn = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={img}
            alt="Warehouse"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900">Get Started Now</h2>
          <p className="text-gray-600 mb-6">Log in to access portal, track progress, and manage requests.</p>

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            className="mb-4"
            placeholder="Please enter your username"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-2"
          />

          <div className="flex justify-between items-center mb-4">
            <FormControlLabel control={<Checkbox />} label="Remember Password" />
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Forgot Password?</a>
          </div>

          <Button variant="contained" fullWidth className="bg-black text-white py-2 mb-4">
            Login Now
          </Button>

          <Button variant="outlined" fullWidth startIcon={<Google />} className="py-2 mb-4">
            Continue with Google
          </Button>

          <p className="text-center text-gray-600">
            Don’t have an account? <a href="#" className="text-blue-500">Sign Up here.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;