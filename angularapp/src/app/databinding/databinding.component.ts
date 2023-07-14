import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.sass']
})
export class DatabindingComponent implements OnInit {
  name : string = 'jack sprrow';
  //isDisabled = true;
  isDisabled = false;
  imageURL : string = "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
  data = {
    id : '101',
    name : 'Herry'
  }
  department: string = 'Support';

  constructor() { }

  ngOnInit() {
  }
  saveData(){
    alert('Button Clicked');
  }

}


