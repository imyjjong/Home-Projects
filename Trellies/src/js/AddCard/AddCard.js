class AddCard{
    constructor(input ,trellie, id){
        this.input = input;
        this.id = id;
        this.trellie = trellie;
        this.newCard();
    }
    newCard(){
        this.trellie.innerHTML = "";

        this.label = document.createElement("div");
        this.label.classList.add("trellies__listItem--label");
        this.label.innerText = this.input[0];
        this.label.style.background = this.input[1];
        this.trellie.appendChild(this.label);

        this.activity = document.createElement("p");
        this.activity.classList.add("trellies__listItem--activity");
        this.activity.setAttribute("id", this.input[6])
        this.activity.innerText = this.input[2];
        this.trellie.appendChild(this.activity);
        console.log(this.input[6]);

        this.figure = document.createElement("figure");
        this.figure.classList.add("trellies__listItem--figure");
        this.trellie.appendChild(this.figure);

        this.initials = document.createElement("h3");
        this.initials.classList.add("trellies__listItem--figure-initials");
        this.initials.innerText = this.input[4];
        this.figure.appendChild(this.initials);

        this.profilePicture = document.createElement("img");
        this.profilePicture.classList.add("trellies__listItem--figure-image");
        this.profilePicture.setAttribute("src", this.input[3]);
        this.profilePicture.setAttribute("title", this.input[5]);
        this.figure.appendChild(this.profilePicture);
        
        this.number = parseInt(document.getElementsByClassName("trellies__headerWrapper--number")[this.id].innerText);
        document.getElementsByClassName("trellies__headerWrapper--number")[this.id].innerText = this.number += 1;
        this.trellie.classList = "trellies__listItem";
        this.array = [];
        this.array.push(this.input);
        this.uniqueId = this.input[2];
        window.localStorage.setItem(this.uniqueId, this.array);
        this.onLoad;
    }
    onLoad = () => {
        this.storageJSON = window.localStorage.getItem(this.uniqueId);
        this.newTrellie = new Trellies();
        this.newTrellie.localStorageCards(this.storageJSON, this.uniqueId);
    }
}