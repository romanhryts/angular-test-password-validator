import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputPasswordComponent } from './input-password.component';
import { InputResultsPainterDirective } from './directives/input-results-painter.directive';


@NgModule({
  declarations: [InputPasswordComponent, InputResultsPainterDirective],
  imports: [CommonModule],
  exports: [InputPasswordComponent]
})
export class InputPasswordModule {
}
