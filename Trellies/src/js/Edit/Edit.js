class Edit{
    constructor(){
        this.deleteCards();
        this.editCards();
    }
    deleteCards(){
        this.edit = document.getElementsByClassName("trellies__headerWrapper--number");
        for(let i = 0; i < this.edit.length; i++){
            this.edit[i].onclick = () => {
                this.amount = parseInt(this.edit[i].innerText);
                this.trellie = this.edit[i].parentElement.parentElement.parentElement;
                this.id = this.trellie.id;
                this.children = this.trellie.children[1].children;
                for(let i = 0; i < this.children.length; i++){
                    this.children[i].classList.toggle("edit");
                    this.children[i].onclick = () => {
                        if(this.children[i].classList == "trellies__listItem edit"){
                            this.children[i].remove();
                            document.getElementsByClassName("trellies__headerWrapper--number")[this.id].innerText -= 1;
                        }
                    }
                }
            }
        }
    }
    editCards(){
        this.clicked = false;
        this.trellieCard = document.getElementsByClassName("trellies__listItem--activity");
        for(let i = 0; i < this.trellieCard.length; i++){
            this.trellieCard[i].onclick = () => {
                if(this.clicked === false){
                    this.value = this.trellieCard[i].innerText;
                    this.trellieCard[i].innerText = "";
                    this.input = document.createElement("textarea");
                    this.input.classList.add("edit__input");
                    this.input.value = this.value;
                    this.trellieCard[i].appendChild(this.input);

                    this.submit = document.createElement("button");
                    this.submit.classList.add("edit__submit");
                    this.submit.onclick = this.saveEdit;
                    this.submit.innerText = "Submit";
                    this.trellieCard[i].appendChild(this.submit);
                    this.clicked = true;
                }
            }
        }
    }
    saveEdit = () => {
        
    }
}