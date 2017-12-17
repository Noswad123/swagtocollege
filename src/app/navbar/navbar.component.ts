import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../services/navigation.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private navigationService: NavigationService) { }

  ngOnInit() {
  }

  setView(page, view){

    this.navigationService.setView(page,view);

  }

}
