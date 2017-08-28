import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input('color') @HostBinding('style.color') color:string = "#000"

  constructor() { }

  @Input() @HostBinding('style.background-color') bgColor:string;


  ngOnInit() {
    this.bgColor = GLOBAL_COLORS[this.bgColor] || this.bgColor;
    this.color= GLOBAL_COLORS[this.color] || this.color;
  }

}
