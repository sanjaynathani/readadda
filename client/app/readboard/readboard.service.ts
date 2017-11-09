import {Story} from '../entity/story';
import { Injectable } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {URLMapper} from '../ServiceURLConfig';

@Injectable()
export class ReadBoardService {
    constructor(private http: Http) { }
    
    private _storyListUrl = URLMapper.getURL().storyListURL();
    //private _storyUrl = 'http://localhost:3000/homeData.json';

    getStories() {
        console.log(this. _storyListUrl);
        
        return this.http.get(this. _storyListUrl)
            .map(res => <Story[]>res.json().stories)
            .do(data => console.log(data)) 
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    private getAppPath() {
        console.log('HOST :' + location.origin);
        var pathArray = location.href.split('/');
        var appPath = "/";
        for (var i = 1; i < pathArray.length - 1; i++) {
            appPath += pathArray[i] + "/";
        }
        return appPath;
    }
}