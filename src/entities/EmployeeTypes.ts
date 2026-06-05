export interface Employee {
    id: number,
    name: string,
    role: string,
    department: string,
    status: statusType
    startDate: string,
    skills: string[],
    avatar: null
}


export type statusType = 'Active' | 'On Leave' | 'Probation'