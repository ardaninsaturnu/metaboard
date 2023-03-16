import Layout from "../../../components/Layout";
import PortfolioTable from "../../../components/Portfolio/Element/PortfolioTable";
import Table from "../../../components/Portfolio/Element/Table";

const Dashboard = () => {
  return(
    <>
      <Layout>
        <div className="w-full text-start px-5">
          <p className="text-start text-[12px] text-[#8F9098ff]">Portfolio Value</p>
          <p className="text-4xl font-bold">$100.00</p>
        </div>
        <div className="bg-gray-800 w-[95%] mx-auto mt-10 py-6 px-3 rounded-xl">
          <Table/>
          <PortfolioTable/>
        </div>
      </Layout>
    </>
  )
}
export default Dashboard;
