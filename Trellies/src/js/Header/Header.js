class Header{
    constructor(){
        this.createHeader();
    }
    createHeader(){
        this.body = document.querySelector("body");
        this.header = document.createElement("header");
        this.header.classList.add("header");
        this.body.appendChild(this.header);

        this.list = document.createElement("ul");
        this.list.classList.add("header__list");
        this.header.appendChild(this.list);

        this.listItem = document.createElement("li");
        this.listItem.classList.add("header__listItem");
        this.listItem.innerText = "trellie";
        this.list.appendChild(this.listItem);
    }
}