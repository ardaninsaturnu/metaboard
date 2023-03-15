import {
  Dashboard,
  KeyboardArrowUpOutlined,
  PaymentSharp, Settings,
  StreetviewTwoTone,
  SwapHoriz,
  WatchLater
} from "@mui/icons-material";
import Image from "next/image";
import usa from "../src/images/usa.png";

const iconStyles = (slug, state) => `${ slug === state ? 'text-[#cfe8ff]' : 'text-orange' } w-[4px]`

export const sidebarLinks = (state) => {
  return [
  {
    to: '/portfolio',
    link: 'Portfolio',
    slug: 'portfolio',
    icon: <Dashboard className={iconStyles( 'portfolio', state )}/>
  },
  {
    to: '/buy',
    link: 'Buy',
    slug: 'buy',
    icon: <PaymentSharp className={iconStyles( 'buy', state )}/>
  },
  {
    to: '/swap',
    link: 'Swap',
    slug: 'swap',
    icon: <SwapHoriz className={iconStyles( 'swap', state )}/>
  },
  {
    to: '/bridge',
    link: 'Bridge',
    slug: 'bridge',
    icon: <KeyboardArrowUpOutlined className={iconStyles( 'bridge', state )}/>
  },
  {
    to: '/stake',
    link: 'Stake',
    slug: 'stake',
    icon: <StreetviewTwoTone className={iconStyles( 'stake', state )}/>
  },
  {
    to: '/watchlist',
    link: 'Watchlist',
    slug: 'watchlist',
    icon: <WatchLater className={iconStyles( 'watchlist', state )}/>
  },
  {
    to: '/settings',
    link: 'Settings',
    slug: 'settings',
    icon: <Settings className={iconStyles( 'settings', state )}/>
  }
]
}

export const selectCountry = [
  {
    value: 1,
    text: 'USA',
    icon: <Image src={usa} alt="flag usa" style={{width:24}}/>
  },
  {
    value: 2,
    text: 'GB',
    icon: <Image src={usa} alt="flag usa" style={{width:24}}/>
  },
  {
    value: 3,
    text: 'TUR',
    icon: <Image src={usa} alt="flag usa" style={{width:24}}/>
  }
]

export const selectBalance = [
  {
    value: 1,
    text: 'USA',
    icon: <Image src={usa} alt="flag usa" style={{width:24}}/>
  },
  {
    value: 2,
    text: 'GB',
    icon: <Image src={usa} alt="flag usa" style={{width:24}}/>
  },
  {
    value: 3,
    text: 'TUR',
    icon: <Image src={usa} alt="flag usa" style={{width:24}}/>
  }
]

