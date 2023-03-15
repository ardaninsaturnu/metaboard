import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerElement from "./Drawer";
import {useDispatch, useSelector} from "react-redux";

const drawerWidth = 140;

const SideBar = ({ window }) => {
  const container = window !== undefined ? () => window().document.body : undefined;
  const mobileOpen = useSelector( state => state.mobileOpen );
  const dispatch = useDispatch();
  
  return(
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={() => dispatch({type:'TOGGLE_MOBILE'})}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerElement/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open>
          <DrawerElement/>
        </Drawer>
      </Box>
    </>
  )
}

export default SideBar;
