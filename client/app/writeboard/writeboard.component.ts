import { Component, OnInit } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { isLoggedIn } from '../security/authentication.service';

declare var CKEDITOR: any;

@Component({
  selector: 'writeboard',
  templateUrl: 'writeboard.component.html'
  
})

//@CanActivate(() => isLoggedIn())
export class WriteBoardComponent implements OnInit {
    
  constructor() {
     
  }

  ngOnInit() {
      console.info('Loading WriteBoard');
      //nicEditors.allTextAreas();
      CKEDITOR.replace( 'editor');
  }

}