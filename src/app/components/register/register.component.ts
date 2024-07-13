import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../MaterialModule';
import { registerDto } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
user:registerDto={email:'',firstName:'',password:'',secondName:''}
registerMode :boolean = false;
constructor(private userService:UserService , private router:Router , private toast:ToastrService){

}
register(){
  this.userService.register(this.user).subscribe({
    next:res=>{
      this.toast.success('user Registered Successfully' , 'Success');
      this.registerMode = true;
    },error:err=>{
      this.toast.error(err.error.message, 'error');
    }
  })
}
}
