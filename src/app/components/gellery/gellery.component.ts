import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../models/Photo';
import { MaterialModule } from '../../MaterialModule';

@Component({
  selector: 'app-gellery',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './gellery.component.html',
  styleUrl: './gellery.component.css'
})
export class GelleryComponent implements OnInit {
  @Input() photos:Photo[] = [];

    ngOnInit() {


    }
}
