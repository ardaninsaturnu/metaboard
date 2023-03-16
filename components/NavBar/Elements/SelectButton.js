import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectButton = ({ data, name }) => {
  const [selected, setSelected] = useState('1');
  
  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };
  
  return (
    <div>
      <Select
        name={name}
        value={selected}
        onChange={handleSelectChange}
        className="h-[40px] mt-1 flex w-full text-white rounded-3xl bg-none border border-sky-700 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {data.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <span className="mr-2">{item.icon}</span>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectButton;
