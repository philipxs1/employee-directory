import React from 'react'

type props = {
filter: string;
setFilter: (value: string) => void;
departments: string [];
}
const SelectInput = ({filter, setFilter, departments} : props) => {
  return (
    <div>    
    <select
          className="rounded border px-2 py-4"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >

            <option value=''>All Depts</option>
            {departments.map((dept) => (<option key={dept} value={dept}>{dept}</option>))}
         
        </select> </div>
  )
}

export default SelectInput