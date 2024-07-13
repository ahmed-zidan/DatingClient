import { Component } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule,RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
registerMode:boolean = false;

toggleRegister(){
  this.registerMode = !this.registerMode;
}
}
