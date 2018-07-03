import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OurrestaurantComponent } from './ourrestaurant/ourrestaurant.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    OurrestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollToModule.forRoot()

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MyModule { }