import { Component, OnInit } from 'angular2/core';
import { Story } from './story';
import { ReadBoardService } from './readboard.service';

@Component({
  selector: 'readboard',
  templateUrl: 'readboard.component.html',
  providers: [ReadBoardService]
  
})
export class ReadBoardComponent implements OnInit {
  //stories: Story[];
  selectedStory: Story;
  errorMessage: string;
  showAdvanceSearch = false;
  stories=[];
  constructor(private _readboardService: ReadBoardService) { }
  
  ngOnInit() {
      console.info('Loading ReadBoard');
      this.getStories();
  }
  
  toggleAdvanceSearch() {
      this.showAdvanceSearch=!this.showAdvanceSearch;
  }
  
  getStories() {
      console.info('Loading getStories');
      this._readboardService.getStories().subscribe(
          stories => this.stories = this.stories.concat(stories),
          error =>  this.errorMessage = <any>error);
  }
  
  onScroll() {
    var windowHeight = "innerHeight" in window ? window.innerHeight : document.getElementById('readList').offsetHeight;
    var body = document.body, html = document.getElementById('readList');
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    var windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        this.getStories();
    }
    
  }
  
}