class Trellies{
    constructor(){
        this.data = new Fetch();
        this.createTrellies();
    }
    async createTrellies(){
        this.body = document.querySelector("body");
        this.main = document.createElement("main");
        this.main.classList.add("main");
        this.body.appendChild(this.main);

        const data = await this.data.fetch();
        for(let i = 0; i < data.trellies.length; i++){
            this.trellies = document.createElement("section");
            this.trellies.classList.add("trellies");
            this.trellies.setAttribute("id", data.trellies[i].id)
            this.main.appendChild(this.trellies);

            this.header = document.createElement("header");
            this.header.classList.add("trellies__header");
            this.trellies.appendChild(this.header);
            
            this.title = document.createElement("h2");
            this.title.classList.add("trellies__header--title");
            this.title.innerText = data.trellies[i].title;
            this.header.appendChild(this.title);

            this.wrapper = document.createElement("span");
            this.wrapper.classList.add("trellies__headerWrapper");
            this.header.appendChild(this.wrapper);

            this.trelliesAmount = document.createElement("div");
            this.trelliesAmount.classList.add("trellies__headerWrapper--number");
            this.trelliesAmount.innerText = data.trellies[i].activities.length;
            this.wrapper.appendChild(this.trelliesAmount);

            this.edit = document.createElement("button");
            this.edit.classList.add("trellies__headerWrapper--edit");
            this.edit.innerText = "...";
            this.edit.onclick = () => {new Form(data.trellies[i], data.trellies[i].id)};
            this.wrapper.appendChild(this.edit);

            this.list = document.createElement("ul");
            this.list.classList.add("trellies__list");
            this.trellies.appendChild(this.list);

            let activities = data.trellies[i].activities;
            for(let i = 0; i < activities.length; i++){
                this.trellie = document.createElement("li");
                this.trellie.classList.add("trellies__listItem");
                this.list.appendChild(this.trellie);

                this.label = document.createElement("div");
                this.label.classList.add("trellies__listItem--label");
                this.label.innerText = activities[i].label;
                this.label.style.background = activities[i].color;
                this.trellie.appendChild(this.label);

                this.activity = document.createElement("p");
                this.activity.classList.add("trellies__listItem--activity");
                this.activity.innerText = activities[i].description;
                this.trellie.appendChild(this.activity);

                this.figure = document.createElement("figure");
                this.figure.classList.add("trellies__listItem--figure");
                this.trellie.appendChild(this.figure);

                this.initials = document.createElement("h3");
                this.initials.classList.add("trellies__listItem--figure-initials");
                this.initials.innerText = activities[i].initials;
                this.figure.appendChild(this.initials);

                this.profilePicture = document.createElement("img");
                this.profilePicture.classList.add("trellies__listItem--figure-image");
                this.profilePicture.setAttribute("src", activities[i].imgPath);
                this.profilePicture.setAttribute("title", activities[i].name);
                this.figure.appendChild(this.profilePicture);
            }
        }
        
        this.keyId = window.localStorage.length;
        for(let i = 0; i < this.keyId; i++){
            this.newData = window.localStorage.key([i]);
            this.getItem = window.localStorage.getItem(this.newData);
        
        this.array = [this.getItem.split(",")];
        for(let i = 0; i < this.array.length; i++){
            this.listId = this.array[0][6];
            if(this.array[0][7] == "card"){
                this.newList = document.getElementsByClassName("trellies__list")[this.listId];

                this.newTrellie = document.createElement("li");
                this.newTrellie.classList.add("trellies__listItem");
                this.newList.appendChild(this.newTrellie);
    
                this.label = document.createElement("div");
                this.label.classList.add("trellies__listItem--label");
                this.label.innerText = this.array[0][0];
                this.label.style.background = this.array[0][1];
                this.newTrellie.appendChild(this.label);
    
                this.activity = document.createElement("p");
                this.activity.classList.add("trellies__listItem--activity");
                this.activity.innerText = this.array[0][2];
                this.newTrellie.appendChild(this.activity);
    
                this.figure = document.createElement("figure");
                this.figure.classList.add("trellies__listItem--figure");
                this.newTrellie.appendChild(this.figure);
    
                this.initials = document.createElement("h3");
                this.initials.classList.add("trellies__listItem--figure-initials");
                this.initials.innerText = this.array[0][4];
                this.figure.appendChild(this.initials);
    
                this.profilePicture = document.createElement("img");
                this.profilePicture.classList.add("trellies__listItem--figure-image");
                this.profilePicture.setAttribute("src", this.array[0][3]);
                this.profilePicture.setAttribute("title", this.array[0][5]);
                this.figure.appendChild(this.profilePicture);
            }
        }
        if(this.array[0][1] == "list"){
            this.newTrellies = document.createElement("section");
            this.newTrellies.classList.add("trellies");
            this.id = document.getElementsByClassName("trellies").length;
            this.newTrellies.setAttribute("id", this.id);
            this.main.appendChild(this.newTrellies);

            this.newHeader = document.createElement("header");
            this.newHeader.classList.add("trellies__header");
            this.newTrellies.appendChild(this.newHeader);
            
            this.newTitle = document.createElement("h2");
            this.newTitle.classList.add("trellies__header--title");
            this.newTitle.innerText = this.array[0][0];
            this.newHeader.appendChild(this.newTitle);

            this.newWrapper = document.createElement("span");
            this.newWrapper.classList.add("trellies__headerWrapper");
            this.newHeader.appendChild(this.newWrapper);

            this.newAmount = document.createElement("div");
            this.newAmount.classList.add("trellies__headerWrapper--number");
            this.newAmount.innerText = 0;
            this.newWrapper.appendChild(this.newAmount);

            this.newEdit = document.createElement("button");
            this.newEdit.classList.add("trellies__headerWrapper--edit");
            this.newEdit.innerText = "...";
            this.newEdit.onclick = () => {new Form(this.array[i], this.id)};
            this.newWrapper.appendChild(this.newEdit);

            this.newList = document.createElement("ul");
            this.newList.classList.add("trellies__list");
            this.newTrellies.appendChild(this.newList);
        }
    }
    this.addList = new AddList();
    this.edit = new Edit();
}}