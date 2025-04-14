import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import PatientsList from "./Components/PatientsList";
import PatientsPage from "./Components/PatientsPage";
import Appointments from "./Components/Appointments";
import Theme from "./Components/Theme";
import DoctorsList from "./Components/DoctorsList";
import DoctorsPage from "./Components/DoctorsPage";
import Home from "./Components/Home";


import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";


const UserData = createContext();
const DocData = createContext();

function App() {
  const [listData, setListData] = useState([]);
  const [detail,setDetail] = useState([])
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <UserData.Provider value={{ listData, setListData }}>
          <DocData.Provider value= {{ detail,setDetail }}>
          
          <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      HealthCare Portal
    </Typography>
    <Box sx={{ display: "flex", gap: 1 }}>
      <Button color="inherit" component={RouterLink} to="/">
        Home
      </Button>
      <Button color="inherit" component={RouterLink} to="/registerpatients">
        Register Patients
      </Button>
      <Button color="inherit" component={RouterLink} to="/patients">
        Patients
      </Button>
      <Button color="inherit" component={RouterLink} to="/appointments">
        Appointments
      </Button>
      <Button color="inherit" component={RouterLink} to="/registerdoctors">
        Register Doctors
      </Button>
      <Button color="inherit" component={RouterLink} to="/doctors">
        Doctors
      </Button>
    </Box>
  </Toolbar>
</AppBar>

          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/registerpatients" element={<PatientsList />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/registerdoctors" element={<DoctorsList />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/appointments" element={<Appointments />} />

          </Routes>
          </DocData.Provider>
        </UserData.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
export { UserData };
export { DocData };