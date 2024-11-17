import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [// Components, directives, and pipes in this module
    AppComponent, HomeComponent
  ],
  imports: [// External modules needed
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],// Services available for injection
  bootstrap: [AppComponent]// Root component for app initialization
})
export class AppModule { }
