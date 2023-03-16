import {EllipsisVerticalIcon} from "@heroicons/react/24/solid";
import SelectButton from "../../NavBar/Elements/SelectButton";
import TableTab from "./TableTab";
import {useRouter} from "next/router";

const rows = [
  {
    token: "MANA",
    shortCut: "MN",
    description: "Something will be good",
    portfolio: "76.12",
    price: "0.59",
    balance: "68.02"
  },
  {
    token: "ETH",
    description: "Etherium",
    portfolio: "76.12",
    price: "1682.02",
    balance: "68.02"
  },
  {
    token: "LINK",
    description: "Chainlink",
    portfolio: "125.32",
    price: "28.34",
    balance: "4.42"
  },
  {
    token: "SOL",
    description: "Solana",
    portfolio: "92.56",
    price: "213.98",
    balance: "0.32"
  },
  {
    token: "UNI",
    description: "Uniswap",
    portfolio: "56.76",
    price: "18.23",
    balance: "3.11"
  }
];

export default function Table() {
  const router = useRouter();
  
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <p className="font-bold text-lg">Assets</p>
            <EllipsisVerticalIcon width={16}/>
          </div>
          <div className="flex gap-2 items-baseline">
            <SelectButton data={[{ value:1, text: 'List View' },{ value:2, text: 'Grid View' }]}/>
            <TableTab/>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                    token
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-center text-sm font-semibold text-white">
                    portfolio
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-center text-sm font-semibold text-white">
                    price
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-center text-sm font-semibold text-white">
                    balance
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                { rows.map((row) => (
                  <tr key={row.token}>
                    <td>
                      <div className="flex items-center gap-5 text-start cursor-pointer" onClick={ () => router.push({
                        pathname: `/portfolio/${row.token}`,
                        query: { ...row , id:row.token }
                      })}>
                        <div className="h-[24px] w-[24px] bg-[#101213ff] rounded-3xl"></div>
                        <div>
                          <div>{row.token}</div>
                          <div>{row.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300"> {row.portfolio}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300"> {row.price}
                      <p>+ {row.portfolio}</p></td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300"> {row.balance}
                      <p>+ 45 {row.token}</p></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
