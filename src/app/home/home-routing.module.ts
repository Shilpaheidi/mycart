import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ImageComponent } from '../image/image.component';

const routes: Routes = [


  {path:'', component:HomeComponent},
  { path: 'image/:imageName', component: ImageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
