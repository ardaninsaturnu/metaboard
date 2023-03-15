import AppBar from "@mui/material/AppBar";
import TopBar from "./Elements/TopBar";
import SideBar from "./Elements/SideBar";
import {useDispatch} from "react-redux";

const drawerWidth = 140;

const NavBar = () => {
  const dispatch = useDispatch()
  
  const handleDrawerToggle = () => {
    dispatch({type:'TOGGLE_MOBILE'})
  };
  
  return(
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}>
      <TopBar handleDrawerToggle={handleDrawerToggle}/>
      </AppBar>
      <SideBar handleDrawerToggle={handleDrawerToggle}/>
    </>
  )
}

export default NavBar;
