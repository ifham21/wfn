import React from 'react'
import { TextField, Button, MenuItem } from "@mui/material";
import { Search } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}></div>
      <div className="relative text-center p-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900">Find Your Perfect Warehouse, Anytime, Anywhere</h1>
        <p className="text-gray-600 mt-4">
          Discover the warehouse that works for you. Whether you're growing a business or need personal storage, our global network lets you search and book flexible spaces that meet your needs, anytime, anywhere.
        </p>
      </div>
      <div className="relative bg-white p-4 rounded-xl shadow-lg flex flex-wrap gap-4 items-center mt-6">
        <TextField label="Location" variant="outlined" className="w-40" />
        <TextField label="Start Date" type="date" InputLabelProps={{ shrink: true }} className="w-40" />
        <TextField label="End Date" type="date" InputLabelProps={{ shrink: true }} className="w-40" />
        <TextField select label="Storage Type" variant="outlined" className="w-40">
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" startIcon={<Search />} className="!ml-4 !bg-red-500">
          Search
        </Button>
      </div>
    </div>
  )
}

export default Home