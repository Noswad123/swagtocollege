import { Injectable } from '@angular/core';
import {Timeline} from '../models/timeline';
import {Timelines} from '../data/timeline.data';

@Injectable()
export class TimelineService {
timelines=Timelines;
  constructor() { }
getTimeline(timeline){

    for(var i=0;i<this.timelines.length;i++)
    {
      if(this.timelines[i].grade==timeline){

        return this.timelines[i];
      }else{
        console.log("Timeline not Found")
      }


    }

}
}
