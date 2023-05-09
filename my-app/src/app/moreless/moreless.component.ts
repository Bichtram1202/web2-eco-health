import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moreless',
  templateUrl: './moreless.component.html',
  styleUrls: ['./moreless.component.css']
})
export class MorelessComponent implements OnInit {
  @Input() text: string='';
 @Input() wordLimit: string='';
  constructor(){}
  ngOnInit(): void {

  }

}
