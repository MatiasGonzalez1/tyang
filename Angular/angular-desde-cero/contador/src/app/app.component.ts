import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  count:number = 0;
  add(){
   return this.count++
  }

  restar(){
    return this.count--
  }
}
