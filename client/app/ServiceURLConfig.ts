export class URLMapper{
    private serviceURL: ServiceURL;
    private static instance: URLMapper;
    constructor(){
        this.serviceURL = new TestURL();
        //this.serviceURL = new RestEndPointURL();
    }

    public static getURL() : ServiceURL{
        if(this.instance == null){
            this.instance = new URLMapper();
        }
        return this.instance.serviceURL;
    }
} 

export interface ServiceURL{
    storyListURL();
    storyURL(storyId);
}

export class TestURL implements ServiceURL{
    public storyListURL(){ return location.origin + '/libs/data/storyList.json'; }
    public storyURL(storyId){ return location.origin + '/libs/data/story.json'; }
}

export class RestEndPointURL implements ServiceURL{
    public storyListURL(){  } //Not Implemented!
    public storyURL(storyId){  } //Not Implemented!
}

