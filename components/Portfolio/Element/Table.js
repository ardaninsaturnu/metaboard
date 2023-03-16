import {EllipsisVerticalIcon} from "@heroicons/react/24/solid";
import SelectButton from "../../NavBar/Elements/SelectButton";
import TableTab from "./TableTab";

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Table() {
  return (
    <div className="bg-[#1E1F25ff] py-10">
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
                    Name
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">
                    Title
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">
                    Email
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{person.title}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{person.email}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{person.role}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-400 hover:text-indigo-300">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
