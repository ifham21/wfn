import React, { useState } from "react";

import { Card, CardContent, Typography, Grid, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BusinessIcon from "@mui/icons-material/Business";
import KeyIcon from "@mui/icons-material/VpnKey";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";



const stats = [
  {
    title: "Total Tenants",
    value: "40,689",
    change: "8.5%",
    trend: "up",
    icon: <KeyIcon />,
  },
  {
    title: "Total Landlords",
    value: "40,689",
    change: "8.5%",
    trend: "up",
    icon: <HomeWorkIcon />,
  },
  {
    title: "Total Companies",
    value: "40,689",
    change: "8.5%",
    trend: "down",
    icon: <BusinessIcon />,
  },
  {
    title: "Total Warehouses",
    value: "40,689",
    change: "9.2%",
    trend: "up",
    icon: <WarehouseIcon />,
  },
];

const stats2 = [
  {
    title: "Total Pallets",
    value: "5,000",
    icon: <KeyIcon />,
  },
  {
    title: "Available Pallets",
    value: "1,500",
    icon: <HomeWorkIcon />,
  },
  {
    title: "Rented Pallets",
    value: "3,500",
    icon: <BusinessIcon />,
  },
  {
    title: "Occupancy Rate",
    value: "70%",
    icon: <WarehouseIcon />,
  },
];

const usersData = [
  { id: "000R1", whid: "00001",  wName: "Test", tName: "test", startDate: "2025/03/07", endDate: "2025/03/25" , status: "Active" },
  { id: "000R2", whid: "00002", wName: "Lorem", tName: "test", startDate: "2025/03/07", endDate: "2025/03/25" , status: "Inactive" },
  // Add more user objects as needed
];


const DashboardComponent = () => {

  const [users, setUsers] = useState(usersData);

  return (
    <>
      <div style={{ padding: 20 }}>
        <Typography variant="h5" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Manage and track operations seamlessly here.
        </Typography>
      </div>

      <div style={{ padding: 20 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={3}
                style={{
                  padding: 18,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1" color="textSecondary">
                  {stat.title}
                </Typography>
                <Typography variant="h4">{stat.value}</Typography>
                <div
                  style={{
                    backgroundColor: "#FCE8E6",
                    borderRadius: "50%",
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px 0",
                  }}
                >
                  {stat.icon}
                </div>
                <Typography
                  variant="body2"
                  style={{
                    color: stat.trend === "up" ? "green" : "red",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {stat.trend === "up" ? (
                    <TrendingUpIcon />
                  ) : (
                    <TrendingDownIcon />
                  )}{" "}
                  {stat.change} Up from last week
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div style={{ padding: 20 }}>
        <Grid container spacing={4}>
          {stats2.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={3}
                style={{
                  padding: 50,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1" color="textSecondary">
                  {stat.title}
                </Typography>
                <Typography variant="h4">{stat.value}</Typography>
                <div
                  style={{
                    backgroundColor: "#FCE8E6",
                    borderRadius: "50%",
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px 0",
                  }}
                >
                  {stat.icon}
                </div>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Req ID</TableCell>
              <TableCell>WH ID</TableCell>
              <TableCell>WAREHOUSE NAME</TableCell>
              <TableCell>TENANT NAME</TableCell>
              <TableCell>START DATE</TableCell>
              <TableCell>END DATE</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>ACTIONS</TableCell> 
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {users.map((user) => (
    <TableRow key={user.id}>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.whid}</TableCell>
      <TableCell>{user.wName}</TableCell>
      <TableCell>{user.tName}</TableCell>
      <TableCell>{user.startDate}</TableCell>
      <TableCell>{user.endDate}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          style={{ backgroundColor: user.status === "Active" ? "#b2f5ea" : "#e2e8f0", color: "black" }}
        >
          {user.status}
        </Button>
      </TableCell>
      <TableCell>
        <Button>Accept</Button>
        <Button>Reject</Button>
        <Button color="error"><DeleteIcon /></Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
      </div>
    </>
  );
};

export default DashboardComponent;
