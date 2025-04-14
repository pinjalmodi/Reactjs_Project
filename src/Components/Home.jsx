// Components/Home.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h3" component="h1" color="primary">
        Welcome to the HealthCare Portal
      </Typography>
    </Box>
  );
};

export default Home;
