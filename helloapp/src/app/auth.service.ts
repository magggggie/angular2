import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  contactformWithCredentials(username:string,password:string):boolean{
    if(username==='tom')
      return true;
    return false;
  }


}
