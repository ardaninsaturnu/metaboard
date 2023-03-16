import { Popover } from '@headlessui/react';
import ListItem from "./Elements/ListItem";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon, MinusIcon} from "@heroicons/react/20/solid";

export default function MyAccountsDropdown() {
  return (
    <Popover className="relative">
      <Popover.Button className="border border-solid border-[#8F9098ff] rounded-3xl flex items-center py-1 px-2 gap-2">
        <div className="w-[16px] h-[16px] bg-blue-700 rounded-3xl"></div>
        <p className="text-[14px]">0x423fd....32323d</p>
        <ChevronDownIcon width={16}/>
      </Popover.Button>
        <Popover.Panel className="absolute z-10 min-w-[360px] w-[400px] bg-[#1E1F25ff] rounded-lg">
          <div className="flex justify-between w-full items-center p-4">
            <p className="text-sm font-semibold">My Accounts</p>
            <button className="rounded-3xl border border-[#8F9098ff] py-1 px-3 text-[10px] font-medium flex gap-1"><MinusIcon width={16}/> Deselect All</button>
          </div>
          <div className="divide-y divide-[#8F9098ff]">
            <ul className="pt-3 flex flex-col gap-3 mb-3">
              <ListItem/>
              <ListItem/>
              <ListItem/>
            </ul>
            <div className="p-4 flex gap-3">
              <PlusCircleIcon width={20}/> <span className="text-sm font-semibold">Add another account</span>
            </div>
          </div>
        </Popover.Panel>
    </Popover>
  )
}
