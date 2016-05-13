import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'writeboard',
  template: '<p>WriteBoard</p>'
  
})
export class WriteBoardComponent implements OnInit {

  ngOnInit() {
      console.info('Loading WriteBoard');
  }

}