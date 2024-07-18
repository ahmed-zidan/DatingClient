import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { ListsComponent } from './components/lists/lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import { authHandlerGuard } from './guards/auth-handler.guard';
import { MemberEditComponent } from './components/member-edit/member-edit.component';

export const routes: Routes = [

  {path:"" , component:HomeComponent},
  {path:"home" , component:HomeComponent},
  {path:"register" , component:RegisterComponent},
  {path:"members" , component:MemberListComponent,canActivate:[authHandlerGuard]},
  {path:"member/:id" , component:MemberDetailComponent,canActivate:[authHandlerGuard]},
  {path:"messages" , component:MessagesComponent,canActivate:[authHandlerGuard]},
  {path:"lists" , component:ListsComponent,canActivate:[authHandlerGuard]},
  {path:"edit" , component:MemberEditComponent,canActivate:[authHandlerGuard]},
  {path:"**" , component:HomeComponent,pathMatch:'full'}

];
