import React from 'react'
import type { SortField, SortType } from '../../entities/EmployeeTypes'
import { IoArrowUpSharp } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";


type props = {
    setSortField: (value: SortField) => void;
    sortOrder: SortType;
    setSortOrder: (value: SortType) => void;




}

const SortInput = ({ sortOrder, setSortField, setSortOrder} : props) => {
  return (
    <div className='flex gap-5'>
      <select className='outline-none' onChange={(e) => setSortField(e.target.value as SortField)}>
  <option value="name">Name</option>
  <option value="startDate">Start Date</option>
</select>
<button className='cursor-pointer' onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>{sortOrder === 'asc' ? "[A/Z]" : "[Z/A]"}</button>
    </div>
  )
}

export default SortInput