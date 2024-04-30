class AddList{
    constructor(){
        this.createList();
    }
    createList(){
        this.main = document.querySelector(".main");

        this.id = document.getElementsByClassName("trellies").length;

        this.trellies = document.createElement("section");
        this.trellies.classList.add("trellies");
        this.trellies.setAttribute("id", this.id);
        this.main.appendChild(this.trellies);
        
        this.list = document.createElement("ul");
        this.list.classList.add("trellies__list");
        this.trellies.appendChild(this.list);

        this.add = document.createElement("li");
        this.add.classList.add("formsAdd");
        this.add.innerText = "+";
        this.add.onclick = this.headerTitle;
        this.list.appendChild(this.add);
    }
    headerTitle = () => {
        this.list.remove();
        this.header = document.createElement("header");
            this.header.classList.add("trellies__header");
            this.trellies.appendChild(this.header);
            
            this.titleInput = document.createElement("input");
            this.titleInput.classList.add("forms__input");
            this.trellies.appendChild(this.titleInput);

            this.submit = document.createElement("input");
            this.submit.classList.add("forms__submit");
            this.submit.setAttribute("type", "submit");
            this.submit.onclick = this.addHeader;
            this.trellies.appendChild(this.submit);
    }
    addHeader = () => {
        this.title = document.createElement("h2");
        this.title.classList.add("trellies__header--title");
        this.title.innerText = this.titleInput.value;
        this.header.appendChild(this.title);

        this.wrapper = document.createElement("span");
        this.wrapper.classList.add("trellies__headerWrapper");
        this.header.appendChild(this.wrapper);

        this.trelliesAmount = document.createElement("div");
        this.trelliesAmount.classList.add("trellies__headerWrapper--number");
        this.trelliesAmount.innerText = 0;
        this.wrapper.appendChild(this.trelliesAmount);

        this.id = document.getElementsByClassName("trellies").length - 1;

        this.edit = document.createElement("button");
        this.edit.classList.add("trellies__headerWrapper--edit");
        this.edit.innerText = "...";
        this.edit.onclick = () => {new Form(this.list, this.id)};
        this.wrapper.appendChild(this.edit);

        this.list = document.createElement("ul");
        this.list.classList.add("trellies__list")
        this.trellies.appendChild(this.list);

        this.titleInput.remove();
        this.submit.remove();
    }
}