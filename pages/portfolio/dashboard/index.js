import Layout from "../../../components/Layout";
import PortfolioTable from "../../../components/Portfolio/Element/PortfolioTable";

const Dashboard = () => {
  return(
    <>
      <Layout>
        <div className="w-full text-start px-5">
          <p className="text-start text-[12px] text-[cadetblue]">Portfolio Value</p>
          <p className="text-3xl">$100.00</p>
        </div>
        <div className="bg-gray-800 w-[95%] mx-auto mt-10 py-6 px-3 rounded-xl">
          <PortfolioTable/>
        </div>
      </Layout>
    </>
  )
}
export default Dashboard;
