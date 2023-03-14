import {useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {sidebarLinks} from "../../../utility/constant";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

const DrawerElement = () => {
  const [itemSelected, setItemSelected] = useState('portfolio');
  
  return ( <>
    < div className="bg-gray-800 text-[#cfe8ff] h-screen">
      < Toolbar/>
        < List >
          {
            sidebarLinks.map(({to, link, slug, icon}, index) => (
                <ListItem key={index} disablePadding onClick={() => setItemSelected(slug)} className="border-l-cyan-700">
                  {/* TODO: border will fixed. */}
                  <Link href={to} className="flex items-center p-3">
                    <ListItemIcon className="min-w-[28px]">
                      {icon}
                    </ListItemIcon>
                    <p className="text-sm">{link}</p>
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
