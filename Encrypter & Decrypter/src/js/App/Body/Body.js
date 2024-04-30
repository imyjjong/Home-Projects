class Body{
    htmlElement;
    textarea;
    text;
    constructor(view, object){
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("viewBody");
        this.textarea = document.createElement("textarea");
        this.textarea.classList.add("viewBody__textarea");
        this.textarea.placeholder = object.placeholder;
        this.text = object.value;
        this.htmlElement.appendChild(this.textarea);
        this.textarea.oninput = this.typed;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
    typed = (event) => {
        this.text = event.target.value;
    }
    changeBody = (newText) => {
        this.textarea.value = newText;
    }
}