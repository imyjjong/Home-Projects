class Main{
    encrypterView;
    decrypterView;
    htmlElement;
    app;
    constructor(data, app){
        this.app = app;
        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));
        this.encrypterView = new EncrypterView(this, data.encrypt);
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }
    
    cipher(cipherText, type){
        if(type === "ENCRYPT"){
            this.app.encrypt(cipherText);
        }
        else{
            this.app.decrypt(cipherText);
        }
    }

    changeEncrypter(encrypted){
        this.encrypterView.changeBody(encrypted);
    }

    changeDecrypter(decrypted){
        this.decrypterView.changeBody(decrypted);
    }
}