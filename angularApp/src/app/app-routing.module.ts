import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OurrestaurantComponent } from './ourrestaurant/ourrestaurant.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
 
  { path: 'gallery', component: GalleryComponent },
  { path: 'aboutus', component: OurrestaurantComponent },
  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
