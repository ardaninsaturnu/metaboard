import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import SelectButton from "./SelectButton";
import {selectCountry} from "../../../utility/constant";
import Toolbar from "@mui/material/Toolbar";
import {useSelector} from "react-redux";

const TopBar = ({handleDrawerToggle}) => {
  const selectedPage = useSelector( state => state.selectedPage )
  
  return(
    <Toolbar className="bg-gray-900 flex justify-between">
      <div>
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
      </div>
      <SelectButton data={selectCountry} name="country" label="Select Country" />
    </Toolbar>
  )
}

export default TopBar;
