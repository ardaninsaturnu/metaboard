import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MobileAppBar from "./NavBar";

const drawerWidth = 140;

function ResponsiveDrawer() {
  
  return (
    <Box sx={{ display: 'flex' }} className="border-gray-800">
      <CssBaseline />
      <MobileAppBar/>
    </Box>
  );
}

export default ResponsiveDrawer;
