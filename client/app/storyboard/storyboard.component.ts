import { Component, OnInit } from 'angular2/core';
import { Story } from '../readboard/story';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'storyboard',
  templateUrl: 'storyboard.component.html'
  
})
export class StoryBoardComponent implements OnInit {
    storyId: string;
    constructor(params: RouteParams) {
        this.storyId = params.get('storyId');
    }
    
    ngOnInit() {
      console.info('Loading StoryBoard');
  }
}