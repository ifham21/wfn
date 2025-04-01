import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const usersData = [
  { id: "00001", name: "Christine Brooks", country: "United Kingdom", email: "lorem@gmail.com", category: "Landlord", status: "Active" },
  { id: "00002", name: "Andrea Carol", country: "United States", email: "ipsum@gmail.com", category: "Tenant", status: "Inactive" },
  { id: "00003", name: "Bella Bernadette", country: "United Kingdom", email: "lorem@gmail.com", category: "Tenant", status: "Active" },
];

const User = () => {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || user.status === statusFilter)
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>User List</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={search}
          onChange={handleSearch}
        />
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select value={statusFilter} onChange={handleFilterChange} label="Status">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>Add New User</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>CID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.country}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.category}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: user.status === "Active" ? "#b2f5ea" : "#e2e8f0", color: "black" }}
                  >
                    {user.status}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button><EditIcon /></Button>
                  <Button color="error"><DeleteIcon /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default User;