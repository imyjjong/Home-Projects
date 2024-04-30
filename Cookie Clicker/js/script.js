class Cookie{
    HTMLElement = undefined;
    score = undefined;
    factor = 1;
    constructor(newElement, score){
        this.HTMLElement = newElement;
        this.HTMLElement.onclick = this.onClicked;
        this.score = score;
    }
    onClicked = () => {
        this.score.scoreClicked(this.factor);
    }
    changeStyle(){
        this.HTMLElement.classList.add("cookie--chocolate");
    }
}

class Score{
    score = 0;
    HTMLElement = undefined;
    bought = false;
    cookie = undefined;
    constructor(newScore, newHTMLElement){
        this.score = newScore;
        this.HTMLElement = newHTMLElement;
        this.HTMLElement.innerText = this.score;
    }
    scoreClicked(cookieFactor){
        this.score = this.score + cookieFactor;
        this.HTMLElement.innerText = this.score;
    }
    subtractScore = () => {
        this.score = this.score - 100;
        this.HTMLElement.innerText = this.score;
    }
    autoScoreClicked(){
        if(this.bought === false){
            this.bought = true;
            setInterval(() => {
                this.score = this.score + 500;
                this.HTMLElement.innerText = this.score;
            }, 10000);
        }
    }
    addPoints(){
        this.maxScore = this.score + 1000;
        this.current = parseInt(this.HTMLElement.innerHTML);
        this.inerval = setInterval(() => {
            this.HTMLElement.innerHTML = this.current;
            if(this.current++ === this.maxScore){
                clearInterval(this.inerval);
                document.getElementById("js--cookie").classList.remove("cookie--chocolate");
                this.score = this.current - 1;
                this.HTMLElement.innerText = this.score;

            }
        },0.0000001);
    }
    scoreLoaded(newScore){
        this.score = newScore;
        this.HTMLElement.innerText = this.score;
    }
}

class ChocolateCookie{
    HTMLElement = undefined;
    bought = false;
    cookie = undefined;
    constructor(newHTMLElement, newCookie){
        this.HTMLElement = newHTMLElement;
        this.cookie = newCookie;
        this.HTMLElement.onclick = this.chocoCookieClicked;
    }
    chocoCookieClicked = () => {
        if(this.bought === false && window.localStorage.getItem("chocoCookie") !== true){
            this.bought = true;
            window.localStorage.setItem("chocoCookie", this.bought);
            this.cookie.changeStyle();
            this.cookie.score.addPoints();
        }
    }
}

class Multiplier{
    factor = 100;
    HTMLElement = undefined;
    cookie = undefined;
    bought = false;
    constructor(HTMLElement, newCookie){
        this.HTMLElement = HTMLElement;
        this.HTMLElement.onclick = this.multiplierClicked;
        this.cookie = newCookie;
    }
    multiplierClicked = () => {
        if(this.bought === false){
            this.bought = true;
            this.cookie.score.subtractScore();
            this.cookie.factor = this.factor;
        }
    }
}

class AutoScore{
    HTMLElement = undefined;
    score = undefined;
    bought = false;
    constructor(newHTMLElement, score){
        this.HTMLElement = newHTMLElement;
        this.score = score; 
        this.HTMLElement.onclick = this.autoScoreClicked;
    }
    autoScoreClicked = () => {
        if(this.bought === false){
            this.bought = true;
            this.score.autoScoreClicked();
            this.score.subtractScore();
        }
    }
}

class Save{
    HTMLElement = undefined;
    constructor(newHTMLElement){
        this.HTMLElement = newHTMLElement;
        this.HTMLElement.onclick = this.saveClicked;
    }
    saveClicked = () => {
        window.localStorage.setItem("score", this.score.score);
    }
}

class Load{
    score;
    constructor(newScore){
        this.score = newScore;
        this.onLoad;
    }
    onLoad = () => {
        const scoreLocalStorage = parseInt(window.localStorage.getItem("score"))
        if(typeof scoreLocalStorage === "number"){
            this.score.scoreLoaded(scoreLocalStorage);
        }
    }
}

class App{
    constructor(){
        const score = new Score(0, document.getElementById("js--score"));
        const cookie = new Cookie(document.getElementById("js--cookie"), score);
        const multiplier = new Multiplier(document.getElementById("js--multiplier"), cookie);
        const autoScore = new AutoScore(document.getElementById("js--autoScore"), score);
        const chocoCookie = new ChocolateCookie(document.getElementById("js--chocoCookie"), cookie);
        const save = new Save(document.getElementById("js--save"));
        const load = new Load(score);

        const mobileMultiplier = new Multiplier(document.getElementById("js--multiplier-mobile"), cookie);
        const mobileAutoScore = new AutoScore(document.getElementById("js--autoScore-mobile"), score);
        const mobileChocoCookie = new ChocolateCookie(document.getElementById("js--chocoCookie-mobile"), cookie);
    }
}

const app = new App();