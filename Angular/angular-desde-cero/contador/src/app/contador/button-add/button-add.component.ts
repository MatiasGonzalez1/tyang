import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  @Input()
  count:number = 0;
  
  @Output() onAdd:EventEmitter<number> = new EventEmitter()

  add(){
    this.count++
    this.onAdd.emit(this.count)
  }
}
