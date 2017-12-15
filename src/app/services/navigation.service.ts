import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  view = {
    "involved": "landing",
    "timeline": "landing",
    "about": "landing",
    "resources": "landing"
  }
  constructor() { }
  setView(page: string, link:string) {
    console.log("Resquest from "+page+" to change view to "+link);
    switch (page) {
      case "involved":
      this.view.involved=link;
        break;
      case "timeline":
      this.view.timeline=link;
        break;
      case "about":
      this.view.about=link;
        break;
      case "resources":
      this.view.resources=link;
        break;
    }

  }
  
  getView(page) {

    switch (page) {
      case "involved":
        return this.view.involved;
      case "timeline":
        return this.view.timeline;
      case "about":
        return this.view.about;
      case "resources":
        return this.view.resources;
    }

  }
}
