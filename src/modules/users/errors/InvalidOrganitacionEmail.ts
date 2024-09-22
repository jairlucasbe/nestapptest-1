export class InvalidOrganizationEmail extends Error{
    constructor(message: string){
        super(message);
        this.name = 'Invalid Organization Email';
    }
}