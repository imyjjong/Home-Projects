class Form{
    constructor(trellie, id){
        this.fetchData = new Fetch();
        this.data = trellie;
        this.id = id;
        this.trellie = document.getElementsByClassName("trellies__list")[this.id];
        this.createForm();
    }
    async createForm(){
        this.listItem = document.createElement("li");
        this.listItem.classList.add("forms__listItem");
        this.trellie.appendChild(this.listItem);

        const data = await this.fetchData.fetch();
        for(let i = 0; i < data.inputs.length; i++){
            this.input = document.createElement("input");
            this.input.classList.add("forms__input");
            this.input.setAttribute("type", data.inputs[i].type);
            this.input.setAttribute("name", data.inputs[i].name);
            this.input.placeholder = data.inputs[i].placeholder;
            this.listItem.appendChild(this.input);

        }

        this.submit = document.createElement("button");
        this.submit.classList.add("forms__submit");
        this.submit.innerText = "Submit";
        this.submit.onclick = this.sendInput;
        this.listItem.appendChild(this.submit);
    }
    sendInput = () => {
        this.array = [];
        this.allInputs = document.getElementsByClassName("forms__input");
        for(let i = 0; i < this.allInputs.length; i++){
            this.array.push(this.allInputs[i].value);
        }
        this.addCard = new AddCard(this.array, this.listItem, this.id);
        this.edit = new Edit();
    }
}