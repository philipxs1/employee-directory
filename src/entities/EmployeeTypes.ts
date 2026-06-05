export interface Employee {
    id: number,
    name: string,
    role: string,
    department: string,
    status: StatusType
    startDate: string,
    skills: string[],
    avatar: null
}


export type StatusType = 'Active' | 'On Leave' | 'Probation'

export type SortType = 'asc' | 'desc'

export type SortField = 'name' | 'startDate'