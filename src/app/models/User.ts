export interface User {
    firstName: string,
    lastName: string,
    age?: number,
    email?: string,
    role: string,
    job: string,

    isActive?: boolean,
    registered?: any,
    hide?: boolean
}