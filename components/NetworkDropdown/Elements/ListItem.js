import {CheckIcon} from "@heroicons/react/20/solid";

const ListItem = () => {
  return(
    <li className="flex items-center px-4 gap-4">
      <CheckIcon width={20}/>
      <div className="flex items-center gap-3">
        <div className="h-[24px] w-[24px] bg-orange-500 rounded-3xl"></div>
        <div className="gap-0.5">
          <p className="font-semibold">Ethereum</p>
          <p className="text-[#717A89ff] text-[12px] font-medium">$66.67</p>
        </div>
      </div>
    </li>
  )
}

export default ListItem;
