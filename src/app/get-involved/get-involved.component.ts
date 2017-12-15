import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../services/navigation.service';


@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit {
  selectedView:any;
  constructor(private navigationService:NavigationService) { }

  ngOnInit() {
    this.selectedView=this.navigationService.getView("involved");
    console.log(this.selectedView);
  }
changeView(link:string){
  console.log(link);
  this.navigationService.setView("involved",link);
  this.selectedView=this.navigationService.getView("involved");
}
}
