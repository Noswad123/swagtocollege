import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { BlogComponent } from './blog/blog.component';
import { ResourcesComponent } from './resources/resources.component';
import{NavigationService} from './services/navigation.service';
import {TimelineService} from './services/timeline.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TimelineComponent,
    AboutUsComponent,
    GetInvolvedComponent,
    BlogComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavigationService, TimelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
