import Layout from "../components/Layout";
import Connect from "./portfolio/connect";

export default function Home() {
    return (
      <Layout>
          <div className="bg-gray-900 text-white h-screen mt-12 pt-8 pl-5 w-full text-center">
          <Connect/>
          </div>
      </Layout>
    );
  }
