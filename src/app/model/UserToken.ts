

export class UserToken{
  id: number;
  name: string;
  token:string;
  roles: any;


  constructor(id: number, name: string, token: string, roles: any) {
    this.id = id;
    this.name = name;
    this.token = token;
    this.roles = roles;
  }
}
