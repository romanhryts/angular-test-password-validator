import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputPasswordModule } from './shared/components/input-password/input-password.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputPasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
