import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {selectCountry} from "../../../utility/constant";
import Toolbar from "@mui/material/Toolbar";
import {useSelector} from "react-redux";
import MyAccountsDropdown from "./MyAccountsDropdown";
import NetworkDropdown from "./NetworkDropdown";
import SelectButton from "./SelectButton";

const TopBar = ({handleDrawerToggle}) => {
  const selectedPage = useSelector( state => state.selectedPage )
  
  return(
    <Toolbar className="bg-[#101213ff] flex justify-between">
      <div className="flex items-center gap-5">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          { selectedPage }
        </Typography>
        <MyAccountsDropdown/>
        <NetworkDropdown/>
      </div>
      <SelectButton data={selectCountry}/>
    </Toolbar>
  )
}

export default TopBar;
