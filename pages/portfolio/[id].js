import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const PortfolioItem = () => {
  const router = useRouter();
  const tokenData = router.query;
  console.log(typeof tokenData,'here')
  
  return (
    <Layout>
    
    </Layout>
  );
};

export default PortfolioItem;
