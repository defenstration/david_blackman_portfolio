export type Job = {
    id: number
    position: string;
    business: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    duties: string[];
    skills: string[];
    additionalRoles?: string[];

}