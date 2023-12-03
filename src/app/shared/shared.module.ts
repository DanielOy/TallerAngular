import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackBackgroundDirective } from './directives/black-background.directive';



@NgModule({
  declarations: [
    BlackBackgroundDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BlackBackgroundDirective
  ]
})
export class SharedModule { }
