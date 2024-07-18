import { Component, OnInit } from '@angular/core';
import { UserMember } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MemberCardComponent } from '../member-card/member-card.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  members:UserMember[] = [];

  constructor(private userService:UserService , private toast:ToastrService){

  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next:res=>{
        this.members = res as UserMember[];
      }
    })
  }



}
