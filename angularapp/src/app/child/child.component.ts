import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  //  @Input() dataInput : string;
  @Input('msg') dataInput : string;
  constructor() { }

  ngOnInit() {
    console.log('Input data from parent', this.dataInput);
    
  }

}
