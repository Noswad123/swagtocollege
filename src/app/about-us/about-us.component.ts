import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../services/navigation.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  selectedView:any;
  constructor(private navigationService:NavigationService) { }

  ngOnInit() {
    this.selectedView=this.navigationService.getView("about");
  }
  changeView(link:string){
    console.log(link);
    this.navigationService.setView("about",link);
    this.selectedView=this.navigationService.getView("about");
  }
}
