import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent  implements OnInit {

  @Input() titulo: string="";
  @Input() descripcion: string="";
  @Input() img: string="";

  constructor() { }

  ngOnInit() {}

}
