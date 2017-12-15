import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../services/navigation.service';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  selectedView:any;
  constructor(private navigationService:NavigationService) { }

  ngOnInit() {
    this.selectedView=this.navigationService.getView("resources");
    
  }
  changeView(link:string){
    console.log(link);
    this.navigationService.setView("resources",link);
    this.selectedView=this.navigationService.getView("resources");
  }

}
