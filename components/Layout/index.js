import * as React from 'react';
import Box from '@mui/material/Box';
import NavBar from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Connect from "../../pages/portfolio/connect";

function Layout({children}) {
  return (
    <Box sx={{ display: 'flex' }} className="border-gray-800">
      <CssBaseline/>
      <NavBar/>
      <div className="bg-gray-900 text-white h-screen mt-12 pt-8 pl-5 w-full text-center">
        { children }
      </div>
    </Box>
  );
}

export default Layout;
