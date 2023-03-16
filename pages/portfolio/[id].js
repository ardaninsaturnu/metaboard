import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import LineChart from "../../components/Charts/LineChart";
import TokenDetails from "../../components/Charts/Details";
import HoldingItem from "../../components/Charts/Holdings";
import {DocumentDuplicateIcon, StarIcon} from "@heroicons/react/24/outline";
import {ChevronLeft, ChevronRight, Favorite} from "@mui/icons-material";

export default () => {
  const router = useRouter();
  const tokenData = router.query;
  console.log(tokenData,'here')
  
  return (
    <>
      <Layout>
        <div className="flex items-baseline gap-3 px-4 cursor-pointer" onClick={ () => router.push('/portfolio/dashboard')}>
          <div className="p-1 rounded-md bg-[#262832ff] inline"><ChevronLeft width={12} className="stroke-[#717A89ff]"/></div>
          <p className="text-[10px]">Portfolio</p>
        </div>
        <div className="flex px-4 py-2 items-center gap-3">
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold">{tokenData?.token}</p>
            <p className="text-[12px] font-semibold text-[#717A89ff]">{tokenData?.description}</p>
          </div>
          <div className="p-1 rounded-md bg-[#262832ff]"><StarIcon width={16} className="stroke-[#717A89ff]" /></div>
          <div className="p-1 rounded-md bg-[#262832ff]"><DocumentDuplicateIcon width={16} className="stroke-[#717A89ff]" /></div>
        </div>
        <div className="flex gap-3 px-4 flex-wrap">
          <div className="w-3/6 bg-[#1E1F25ff] box-border p-4 rounded-xl">
            <LineChart data={tokenData} canvasId="lineChart"/>
          </div>
          <div className="w-2/6 bg-[#1E1F25ff] box-border rounded-xl p-5">
            <p className="font-bold text-start text-[#717A89ff] text-[12px]">Token Details</p>
            <ul className="flex flex-col gap-3 py-3">
              <TokenDetails/>
              <TokenDetails/>
              <TokenDetails/>
              <TokenDetails/>
            </ul>
          </div>
          <div className="w-4/6 bg-[#1E1F25ff] box-border p-4 rounded-xl">
            <div className="flex justify-between px-3">
              <p className="text-[14px] font-medium">My Holdings</p>
              <p className="text-[16px] font-bold">$4.95</p>
            </div>
            <ul className="p-4 flex flex-col gap-3">
              <HoldingItem/>
              <HoldingItem/>
              <HoldingItem/>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

