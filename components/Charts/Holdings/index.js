import {DocumentDuplicateIcon} from "@heroicons/react/24/outline";

const HoldingItem = () => {
  return(
    <li className="flex justify-between">
      <div className="flex items-center gap-3">
        <div className="w-[24px] h-[24px] bg-blue-700 rounded-3xl"></div>
        <div className="text-start">
          <p className="text-[14px] font-semibold">0x423fd....32323d</p>
          <p className="text-[10px]">0x423fd....32323d</p>
        </div>
        <div className="p-1 rounded-md bg-[#262832ff]"><DocumentDuplicateIcon width={16} className="stroke-[#717A89ff]" /></div>
      </div>
      <div className="text-end">
        <p className="text-[12px] font-semibold">$4.99</p>
        <p className="text-[12px] font-semibold text-[#717A89ff]">0.1212 ETH</p>
      </div>
    </li>
  )
}

export default HoldingItem;
