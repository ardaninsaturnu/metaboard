import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {sidebarLinks} from "../../../utility/constant";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from 'react-redux';

const DrawerElement = () => {
  const selectedItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();
  
  return ( <>
    < div className="bg-gray-800 text-[#cfe8ff] h-screen">
      < Toolbar/>
        < List >
          {
            sidebarLinks(selectedItem).map(({to, link, slug, icon}, index) => (
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
                  className={ selectedItem === slug ? 'border-r border-r-blue-300 border-r-8' : '' }>
                  {/* TODO: border will fixed. */}
                  <Link href={'#'} className="flex items-center p-3">
                    <ListItemIcon className="min-w-[28px]">
                      {icon}
                    </ListItemIcon>
                    <p className={`text-sm ${ selectedItem === slug ? 'text-blue-100' : 'text-blue-300' }`}>
                      {link}
                    </p>
                  </Link>
                </ListItem>
              )
            )
          }
        </List>
        <Divider/>
    </div>
  </>)
};

export default DrawerElement;
