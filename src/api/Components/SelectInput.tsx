import React from 'react'

const SelectInput = () => {
  return (
    <div>    <select
          className="rounded border px-2 py-4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        >
          <option value="all">All</option>
          <option value="preferredFullName">Name</option>

          <option value="emailAddress">Email</option>

          <option value="userId">User ID</option>
        </select> </div>
  )
}

export default SelectInput