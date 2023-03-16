import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import LineChart from "../../components/Charts/LineChart";
import TokenDetails from "../../components/Charts/Details";

export default () => {
  const router = useRouter();
  const tokenData = router.query;
  console.log(tokenData,'here')
  
  return (
    <>
      <Layout>
        <div className="flex gap-3 px-4">
          <div className="w-4/6 bg-[#1E1F25ff] box-border p-4 rounded-xl">
            <LineChart data={tokenData} canvasId="lineChart"/>
          </div>
          <div className="w-2/6 bg-[#1E1F25ff] box-border rounded-xl p-5">
            <p className="font-bold text-start text-[#717A89ff] text-[12px]">Token Details</p>
            <ul className="flex flex-col gap-3">
              <TokenDetails/>
              <TokenDetails/>
              <TokenDetails/>
              <TokenDetails/>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

