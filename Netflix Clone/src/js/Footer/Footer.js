class Footer{
    constructor(){
        this.createFooter();
    }
    createFooter(){
        this.body = document.querySelector("body");
        
        this.footer = document.createElement("footer");
        this.footer.classList.add("footer");
        this.footer.innerText = "Netflix Clone";
        this.body.appendChild(this.footer);
    }
}