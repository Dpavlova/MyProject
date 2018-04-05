export class Project {

    constructor(
        public projectName: string, 
        public clientName: string,
        public estTime: number,
        public timeUsed?: number,
        public projectId?: string
    ) {}
}