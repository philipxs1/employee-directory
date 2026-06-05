import { useEffect, useMemo, useState } from 'react'

import './App.css'
import { fetchApi } from './api/fetchApi'
import {type  SortField, type Employee, type SortType } from './entities/EmployeeTypes'

import EmployeeCard from './api/Components/EmployeeCard'
import { getInitials } from './utils/getInitials'
import SearchInput from './api/Components/SearchInput'
import SelectInput from './api/Components/SelectInput'
import SortInput from './api/Components/SortInput'

function App() {
  // data
  const [data, setData] = useState<Employee[]>([])
// filter - order - sort state
  const [query, setQuery] = useState<string>('')
  const [filter, setFilter] = useState<string>('')
  const [sortOrder, setSortOder] = useState<SortType>('asc')
  const [sortField, setSortField] = useState<SortField>('name')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)


const searchedData = filterEmployees(data, query)
const filterData = filterByDepartment(searchedData,filter)
const SortedEmployees = sortData(filterData, sortField, sortOrder)

  // mock api call

  useEffect(() => {
async function getEmployees() {
  try {
    setIsLoading(true)
    setError(null)
    const res = await fetchApi()
    setData(res)
  } catch(err) {
    console.error(err)
  } finally {
    setIsLoading(false)
  }
}
getEmployees()
 }, [])

//  search by name and role
 function filterEmployees(data: Employee[], query: string) {
const lowerCase = query.toLowerCase()

return data.filter((item ) => item.name.toLowerCase().includes(lowerCase) || item.role.toLowerCase().includes(lowerCase))
}

// filter departments and get them from the data
const departments = useMemo(() => {
  return Array.from(
    new Set(data.map((emp) => emp.department))
  );
}, [data]);

function filterByDepartment(data : Employee[], filter :string) {
  if (!filter) return data
  return data.filter((emp) => emp.department === filter)
}

// sortEmpoyees 

function sortData(data: Employee[], sortField: SortField, sortOrder: SortType) {
const sorted = [...data]

// return the sort function here
return  data
}

  return (
    <>
      <section id="center" className=' justify-center flex items-center p-10 '>
<div className='flex gap-10'>
  <SelectInput filter={filter} setFilter={setFilter} departments={departments}/>
<SearchInput query={query} setQuery={setQuery} />
<SortInput sortOrder={sortOrder} setSortOrder={setSortOder}  setSortField={setSortField} />
</div>
{ isLoading &&
    <section className="p-10 text-center">
      <p className="text-gray-500">Loading employees...</p>
    </section>

}
{isLoading ? (
  <section className="p-10 text-center">
    <p className="text-gray-500">Loading employees...</p>
  </section>) 
  : error ? (
  <section className="p-10 text-center">
    <p className="text-red-500">{error}</p>
  </section>
) : (
  <ul className="flex flex-col gap-10">
    {SortedEmployees.map((emp) => {
      const id = getInitials(emp.name) + emp.id;
      return <EmployeeCard key={id} emp={emp} />;
    })}
  </ul>
)}
    </section>
    </>
  )
}

export default App

