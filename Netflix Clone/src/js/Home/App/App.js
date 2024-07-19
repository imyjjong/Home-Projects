class App{
    constructor(){
        this.header = new Header();
        this.heading = new Heading();
        this.shows = new Shows();
        this.footer = new Footer();
    }
}


class AppTV{
    constructor(){
        this.headerTV = new HeaderTV();
        this.headingTV = new HeadingTV();
        //this.footer = new Footer();
    }
}


let mediaquery = window.matchMedia("(min-width: 240rem)");

if(mediaquery.matches === true){
    const appTV = new AppTV();        
}
else{
    const app = new App();
}
mediaquery.onchange = () => {
    if(mediaquery.matches === true){
        const appTV = new AppTV();        
    }
    else{
        const app = new App();
    }
}