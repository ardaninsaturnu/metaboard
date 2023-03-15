import {Button, Divider} from "@mui/material";
import Image from "next/image";
import metamask from "../../../src/images/metamask.png";
import store from "../../../src/images/store.png";

export default () => {
  return(
    <div className="w-1/2 mx-auto text-blue-100">
      <h2 className="font-semibold my-5">Connect your wallet</h2>
      <p className="mb-3">Connect more than one account to experince full potential of this dapp.</p>
      <Button variant="outlined" className="rounded-3xl bg-[#006dff] text-white">
        <Image src={metamask} className="mx-2" alt="metamask"/>
        Connect MetaMask
      </Button>
      <Divider className="my-8 border-sky-700">OR</Divider>
      <div>
        <p className="font-semibold mb-4"> Watch Any Wallet </p>
        <div className="flex items-center rounded-3xl bg-gray-800">
          <input
            type="text"
            placeholder="Wallet address or ENS name"
            className="w-full rounded-l-3xl py-2 px-4 text-sky-300 bg-gray-800 outline-0"/>
          <button className="w-[140px] rounded-3xl bg-blue-700 text-white font-medium py-2 px-4 ml-2 hover:bg-blue-600 transition-all">
            import
          </button>
        </div>
        <Divider className="border-sky-700 my-10"/>
        <div className="text-center">
          <p className="text-sm font-semibold mb-3">Don't have a wallet? Get started with MetaMask</p>
          <Image src={store} alt="google store" className="w-[120px] mx-auto"/>
        </div>
      </div>
    </div>
  )
}

