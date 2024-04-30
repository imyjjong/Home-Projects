class Header{
    htmlElement;
    heading;
    constructor(view, headingText){
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("viewHeader");

        this.heading = document.createElement("h2");
        this.heading.classList.add("viewHeader__heading");
        this.heading.innerText = headingText;
        this.htmlElement.appendChild(this.heading);

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}