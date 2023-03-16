import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {sidebarLinks} from "../../../utility/constant";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from 'react-redux';
import ThemeSwitch from "../../ThemeSwitch";

const DrawerElement = () => {
  const selectedItem = useSelector((state) => state.selectedItem);
  const lightMode = useSelector((state) => state.lightMode);
  const dispatch = useDispatch();
  
  return ( <>
    <div className={`${ lightMode ? 'secondary-light' : 'secondary-dark' } text-[#cfe8ff] h-screen`}>
      <Toolbar/>
        <List>
          {
            sidebarLinks(selectedItem).map(({ to, link, slug, icon }, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  onClick={() => dispatch( {
                    type: "SELECT_ITEM",
                    payload: {
                      item: slug,
                      page: link
                    }
                  } )}
                  className={ selectedItem === slug ? 'border-r border-r-[#2644AAff]' : '' }>
                  <Link href={'#'} className="flex items-center p-3">
                    <ListItemIcon className="min-w-[28px]">
                      {icon}
                    </ListItemIcon>
                    <p className={`text-sm ${ selectedItem === slug ? 'text-white font-semibold' : 'text-[#717A89ff] font-medium' }`}>
                      {link}
                    </p>
                  </Link>
                </ListItem>
              )
            )
          }
        </List>
        <Divider/>
      <div className={`${ lightMode ? 'secondary-light' : 'secondary-dark' } flex items-end py-2`}><ThemeSwitch/></div>
    </div>
  </>)
};

export default DrawerElement;
