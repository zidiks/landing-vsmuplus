export interface Roles { 
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;
 }
  
export class User {
    uid: string;
    email: string;
    roles: Roles;


    constructor(authData) {
        this.email = authData.email
        this.uid = authData.uid
        this.roles = { subscriber: true }
    }
}