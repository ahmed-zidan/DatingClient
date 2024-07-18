import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginDto, registerDto, userInfo, UserMember } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }

  getCurrentUserFromLocal(){
    return JSON.parse(localStorage.getItem(environment.userKey) as string) as userInfo;
  }
  removeCurrentUserFromLocal(){
    localStorage.removeItem(environment.userKey)
  }
  setUserInLocalStorage(user:userInfo){
    localStorage.setItem(environment.userKey , JSON.stringify(user));
  }
  login(user:LoginDto){
    return this.http.post(environment.apiUrl + "Account/login" , user);
  }
  register(user:registerDto){
    return this.http.post(environment.apiUrl + "Account/register" , user);
  }

  getUsers(){
    return this.http.get(environment.apiUrl+'Account/getUsers')
  }

  getUser(id:string){
    return this.http.get(environment.apiUrl+'Account/getUser/'+id)
  }

  updateData(user:UserMember){
    return this.http.put(environment.apiUrl+'Account/update',user);
  }

}
