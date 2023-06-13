import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { ImageComponent } from './image/image.component';
// import { MaterialModule } from './material/material.module';
// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeRoutingModule,
    // MaterialModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
