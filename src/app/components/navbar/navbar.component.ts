import { Component } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule,LoginComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
