import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDelComponent } from './button-del/button-del.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    ContadorComponent, ButtonAddComponent, ButtonDelComponent
  ],
  imports:[
    CommonModule
  ],
  exports: [ContadorComponent]
})

export class CounterModule{

}