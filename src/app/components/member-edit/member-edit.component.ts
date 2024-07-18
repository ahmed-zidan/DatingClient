import { Component, EventEmitter, Output } from '@angular/core';
import { UserMember } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../../MaterialModule';
import { GelleryComponent } from '../gellery/gellery.component';
import { PhotoService } from '../../services/photo.service';
import { HttpEventType } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [MaterialModule,GelleryComponent,FormsModule,MatNativeDateModule],
  providers: [
    MatDatepickerModule
  ],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent {
  member!:UserMember;
  selected = 0;

  constructor(private userService:UserService , private toast:ToastrService,private photoService:PhotoService){

  }
  ngOnInit(): void {
    const id = this.userService.getCurrentUserFromLocal().id;
    this.userService.getUser(id).subscribe({
      next:res=>{
        this.member = res as UserMember;
      }
    })
  }

  change(event:any){

  }

  uploadFile(files:any){
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.photoService.uploadFile(formData).subscribe({
      next:event=>{
        const reader = new FileReader();
        reader.readAsDataURL(fileToUpload);
        reader.onload = (_event) => {
          this.member.photoUrl = reader.result; // Assign the image URL to a variable (e.g., this.url)
        };
        this.toast.success('photo saved successfully' , 'success');

      }
    })


  }

  updateCreateDate(event: MatDatepickerInputEvent<Date>) {
    this.member.created=  event.value as Date;
  }

  saveData(){
    this.userService.updateData(this.member).subscribe({
      next:res=>{
        this.toast.success('success' , 'success');
      }
    })
  }
}
