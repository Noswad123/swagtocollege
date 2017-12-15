import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent }      from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {BlogComponent} from './blog/blog.component';
import {TimelineComponent} from './timeline/timeline.component';
import {ResourcesComponent} from './resources/resources.component';
import {GetInvolvedComponent} from './get-involved/get-involved.component';
import {AboutUsComponent} from './about-us/about-us.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'navbar',  component: NavbarComponent },
  { path: 'footer',  component: FooterComponent },
  { path: 'blog',  component: BlogComponent },
  { path: 'about',  component: AboutUsComponent },
  { path: 'involved',  component: GetInvolvedComponent },
  { path: 'resources',  component: ResourcesComponent },
  { path: 'timeline',  component: TimelineComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
