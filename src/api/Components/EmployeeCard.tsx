
import type { Employee } from '../../entities/EmployeeTypes'
import AvatarPlaceHolder from './AvatarPlaceHolder'
import StatusBadge from './StatusBadge'
type props = {
    emp: Employee
}



const EmployeeCard = ({emp} : props) => {
  return (
    <li  className='flex items-center justify-between rounded-lg border bg-white p-4 border-black'>
           
            <div className='flex items-center gap-4'>
              <AvatarPlaceHolder fullName={emp.name}/>
            </div>
             <div>
            <p>{emp.name}</p>
            <p>{emp.role}</p>
            </div>
            <div className='flex flex-col items-end gap-4'>
            <StatusBadge status={emp.status}/>
            <span className='text-sm text-gray'>{emp.startDate}</span>
            </div>
           
          </li>
  )
}

export default EmployeeCard