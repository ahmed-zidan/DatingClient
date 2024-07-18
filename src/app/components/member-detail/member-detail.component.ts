import { Component, OnInit } from '@angular/core';
import { UserMember } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../MaterialModule';
import { GelleryComponent } from '../gellery/gellery.component';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [MaterialModule,GelleryComponent],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  member!:UserMember;
  selected = 0;
  constructor(private userService:UserService , private toast:ToastrService,private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.userService.getUser(id).subscribe({
      next:res=>{
        this.member = res as UserMember;
      }
    })
  }

  change(event:any){

  }
}
