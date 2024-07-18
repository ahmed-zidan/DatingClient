import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient,private userService:UserService) { }

  uploadFile(formData:any){
    return this.http.post(environment.apiUrl + 'Photo/UploadMainPhoto', formData);
  }
  getPhotos(){
    return this.http.get(environment.apiUrl + 'Photo/getAllPhotos');
  }
}
