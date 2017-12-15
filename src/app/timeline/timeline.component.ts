import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../services/navigation.service';
import {Timeline} from "../models/timeline";
import {TimelineService} from "../services/timeline.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  selectedView:any;
  timelines:Timeline[];
  timeline:Timeline;

  constructor(private navigationService:NavigationService,
              private timelineService: TimelineService) { }

  ngOnInit() {
    this.getTimeline("empty");
    this.selectedView=this.navigationService.getView("timeline");
  }

  changeView(link:string){
    console.log(link);
    this.navigationService.setView("timeline",link);
    this.selectedView=this.navigationService.getView("timeline");
  }
  getTimeline(timeline){
    this.timeline=this.timelineService.getTimeline(timeline);
  }
}
