import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

  {path:"" , component:HomeComponent},
  {path:"home" , component:HomeComponent},
  {path:"register" , component:RegisterComponent},
  {path:"**" , component:HomeComponent}

];
