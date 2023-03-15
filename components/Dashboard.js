import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MobileAppBar from "./NavBar";

function Dashboard({children}) {
  return (
    <Box sx={{ display: 'flex' }} className="border-gray-800">
      <MobileAppBar/>
      { children }
    </Box>
  );
}

export default Dashboard;
