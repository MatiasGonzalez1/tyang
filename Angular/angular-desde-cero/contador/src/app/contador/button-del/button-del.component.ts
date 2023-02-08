import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-del',
  templateUrl: './button-del.component.html',
  styleUrls: ['./button-del.component.css']
})
export class ButtonDelComponent {
  @Input()
  count:number = 0;

  @Output() onDel:EventEmitter<number> = new EventEmitter();

  del(){
    this.count--
    this.onDel.emit(this.count);
  }
}
