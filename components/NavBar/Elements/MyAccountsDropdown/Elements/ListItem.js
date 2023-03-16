import {CheckIcon} from "@heroicons/react/20/solid";
import {DocumentDuplicateIcon, EllipsisVerticalIcon} from "@heroicons/react/24/outline";

const ListItem = () => {
  return(
    <li className="flex items-center justify-evenly gap-5 px-4">
      <CheckIcon width={20}/>
      <div className="flex items-center gap-3 justify-between">
        <div className="w-[32px] h-[32px] bg-blue-700 rounded-3xl"></div>
        <div>
          <p className="text-[14px]">0x423fd....32323d <span className="text-[10px]">( 0x42dsa...3223d )</span></p>
          <p className="text-[#717A89ff] text-[10px] font-medium">$65.00</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="p-1 rounded-md bg-[#262832ff]"><DocumentDuplicateIcon width={16} className="stroke-[#717A89ff]" /></div>
        <div className="p-1 rounded-md bg-[#262832ff]"><EllipsisVerticalIcon width={16} className="stroke-[#717A89ff]" /></div>
      </div>
    </li>
  )
}

export default ListItem;
