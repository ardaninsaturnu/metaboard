import * as React from 'react';
import Box from '@mui/material/Box';
import NavBar from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import {useSelector} from "react-redux";

function Layout({children}) {
  const lightMode = useSelector( state => state.lightMode )
  return (
    <Box sx={{ display: 'flex' }} className="border-gray-800">
      <CssBaseline/>
      <NavBar/>
      <div className={`${ lightMode ? 'primary-light' : 'primary-dark' } text-white h-screen mt-12 pt-8 pl-5 sm:w-auto md:w-full text-center`}>
        { children }
      </div>
    </Box>
  );
}

export default Layout;
