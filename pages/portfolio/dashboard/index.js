import Layout from "../../../components/Layout";
import Table from "../../../components/Portfolio/Element/Table";
import {useSelector} from "react-redux";

const Dashboard = () => {
  const lightMode = useSelector( state => state.lightMode )
  return(
    <>
      <Layout>
        <div className="w-full text-start px-5">
          <p className="text-start text-[12px] text-[#8F9098ff]">Portfolio Value</p>
          <p className="text-4xl font-bold">$100.00</p>
        </div>
        <div className={`${ lightMode ? 'secondary-light' : 'secondary-dark'} mt-10 py-6 px-4 rounded-xl w-10/12`}>
          <Table/>
        </div>
      </Layout>
    </>
  )
}
export default Dashboard;
