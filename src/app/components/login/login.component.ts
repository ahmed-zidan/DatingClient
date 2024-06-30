import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { LoginDto, userInfo } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  username:string = '';
  loginDto:LoginDto = {email:'' , password:''};
  constructor(private toast:ToastrService,private user:UserService , private router:Router){

  }
  getUser(){
    let user = this.user.getCurrentUserFromLocal();
    if(user != undefined){
      this.username = user.userName;
      return user;
    }else{
      return null;
    }
  }
  login(){
    console.log(22222222);
    this.user.login(this.loginDto).subscribe({
      next:res=>{
        this.user.setUserInLocalStorage(res as userInfo);
        this.toast.success("Logined Successfully" ,"Success" )
      },error:err=>{
        this.toast.error(err.error.message ,"error" )
      }
    })
  }

  logOut(){
    this.user.removeCurrentUserFromLocal();
  }


}
