export class User {
    constructor(
        public name: string,
        public email: string,
        public college: string,
        public contact : string,
        public pass : string,
        public totalhints : number,
        public lefthint: number,
        public score: number,
        public skipleft: number
    ){}
}
