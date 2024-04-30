class Footer{
    htmlElement;
    button;
    buttonText;
    constructor(view, buttonText){
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("viewFooter");

        this.button = document.createElement("button");
        this.button.classList.add("viewFooter__button");
        this.button.innerText = buttonText;
        this.htmlElement.appendChild(this.button);

        this.htmlElement.onclick = this.buttonClicked;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    buttonClicked = () => {
        this.input = this.view.bodyInput();
    }
}