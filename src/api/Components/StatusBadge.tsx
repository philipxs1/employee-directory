import type { statusType } from "../../entities/EmployeeTypes"

type props = {
    status: statusType
}
const BADGE_VARIANT: Record<props['status'], string> = {
    "Active": 'bg-green-500',
   "On Leave": 'bg-red-500',
   "Probation": 'bg-yellow-500',
}

const StatusBadge = ({status} : props) => {
  return (

<div className=""><span className={`px-4 py-2 rounded text-white ${BADGE_VARIANT[status]}`}>{status}</span></div>
  )
}

export default StatusBadge