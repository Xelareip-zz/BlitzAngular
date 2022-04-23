import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrothComponent } from './broth.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, BrothComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
