import * as React from 'react';
import Box from '@mui/material/Box';
import NavBar from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";

function Dashboard({children}) {
  return (
    <Box sx={{ display: 'flex' }} className="border-gray-800">
      <CssBaseline/>
      <NavBar/>
      { children }
    </Box>
  );
}

export default Dashboard;
