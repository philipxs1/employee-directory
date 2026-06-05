import { useEffect, useState } from 'react'

import './App.css'
import { fetchApi } from './api/fetchApi'
import { type Employee } from './entities/EmployeeTypes'
import AvatarPlaceHolder from './api/Components/AvatarPlaceHolder'
import StatusBadge from './api/Components/StatusBadge'
import EmployeeCard from './api/Components/EmployeeCard'
import { getInitials } from './utils/getInitials'
import SearchInput from './api/Components/SearchInput'
import SelectInput from './api/Components/SelectInput'

function App() {
  const [data, setData] = useState<Employee[]>([])
  const [query, setQuery] = useState<string>('')
  const [filter, setFilter] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)


const filteredData = filterEmployees(data, query)

  // mock api call

  useEffect(() => {
async function getEmployees() {
  try {
    setIsLoading(true)
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

 function filterEmployees(data: Employee[], query: string) {
const lowerCase = query.toLowerCase()

return data.filter((item ) => item.name.toLowerCase().includes(lowerCase) || item.role.toLowerCase().includes(lowerCase))

}


  return (
    <>
      <section id="center" className=' justify-center flex items-center p-10 '>
<div>
  <SelectInput filter={filter} setFilter={setFilter} />
<SearchInput query={query} setQuery={setQuery} />
</div>

        <ul className=' flex flex-col gap-10'>
        {filteredData.map((emp) => {
          const id = getInitials(emp.name) + emp.id
          console.log(id)
          return (
          <EmployeeCard key={id} emp={emp} />
          )

        })}
     </ul>
    </section>
    </>
  )
}

export default App

