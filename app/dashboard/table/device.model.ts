export class Device {
    constructor(
        public addr: string,
        public name: string,
        public startTime: string,
        public endTime: string,
        public status: string,
        public token: string
    )
    {

    }
}