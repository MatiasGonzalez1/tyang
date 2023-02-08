import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ButtonAddComponent } from './contador/button-add/button-add.component';
import { ButtonDelComponent } from './contador/button-del/button-del.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ButtonAddComponent,
    ButtonDelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
