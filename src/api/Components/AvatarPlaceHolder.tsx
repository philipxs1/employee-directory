import { getInitials } from "../../utils/getInitials"

type props = {
    fullName: string
}

 

const AvatarPlaceHolder = ({fullName}: props) => {
    
   const Initials = getInitials(fullName)


  return (
    <div className='flex h-14 w-14 rounded-[100px] bg-gray-700 text-white m-auto'><span className='m-auto'>{Initials}</span></div>
  )
}

export default AvatarPlaceHolder