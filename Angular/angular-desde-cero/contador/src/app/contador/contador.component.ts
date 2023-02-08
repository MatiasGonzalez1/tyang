import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title = 'contador';
  count:number = 0;

handleCount(value:number){
  this.count = value;
}
}
