import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NavigationService} from '../services/navigation.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, 
              private navigationService:NavigationService) { }

  ngOnInit() {
    this.getView();
  }
  getView(){


  }
navInvolve(link){

  this.navigationService.setView("involved","link");
  this.router.navigate(["involved"])

}
}
