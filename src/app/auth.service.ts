import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false
  constructor() { }

  logIn(){
    this.isAuth = true;
  }

  logOut(){
    this.isAuth = false
  }

  getIsAuth(){
    return this.isAuth
  }

  checkIsAuthenticated(): Promise<boolean> {
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve(this.isAuth)
      }, 1000)
    })
  }

}
