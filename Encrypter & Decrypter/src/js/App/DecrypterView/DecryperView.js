class DecrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type;
    constructor(main, object){
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        this.type = "DECRYPT";

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this, object);
        this.footer = new Footer(this, "Decrypt");
    }

    bodyInput = () => {
        this.main.cipher(this.body.text, this.type);
    }
    changeBody(decrypted){
        this.body.changeBody(decrypted);
    }
}