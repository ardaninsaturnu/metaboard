import {
  Dashboard,
  KeyboardArrowUpOutlined,
  PaymentSharp, Settings,
  StreetviewTwoTone,
  SwapHoriz,
  WatchLater
} from "@mui/icons-material";

export const sidebarLinks = [
  {
    to: '/portfolio',
    link: 'Portfolio',
    slug: 'portfolio',
    icon: <Dashboard className="text-[#cfe8ff] w-[4px]"/>
  },
  {
    to: '/buy',
    link: 'Buy',
    icon: <PaymentSharp className="text-[#cfe8ff]"/>
  },
  {
    to: '/swap',
    link: 'Swap',
    slug: 'swap',
    icon: <SwapHoriz className="text-[#cfe8ff]"/>
  },
  {
    to: '/bridge',
    link: 'Bridge',
    slug: 'bridge',
    icon: <KeyboardArrowUpOutlined className="text-[#cfe8ff]"/>
  },
  {
    to: '/stake',
    link: 'Stake',
    slug: 'stake',
    icon: <StreetviewTwoTone className="text-[#cfe8ff]"/>
  },
  {
    to: '/watchlist',
    link: 'Watchlist',
    icon: <WatchLater className="text-[#cfe8ff]"/>
  },
  {
    to: '/settings',
    link: 'Settings',
    icon: <Settings className="text-[#cfe8ff]"/>
  }
]

