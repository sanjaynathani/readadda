import { Component, OnInit } from 'angular2/core';

declare var CKEDITOR: any;

@Component({
  selector: 'writeboard',
  templateUrl: 'writeboard.component.html'
  
})
export class WriteBoardComponent implements OnInit {

  ngOnInit() {
      console.info('Loading WriteBoard');
      //nicEditors.allTextAreas();
      CKEDITOR.replace( 'editor');
  }

}