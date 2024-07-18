import { Component, Input } from '@angular/core';
import { UserMember } from '../../models/user';
import { MaterialModule } from '../../MaterialModule';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [MaterialModule,RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  @Input() member!:UserMember;
}
