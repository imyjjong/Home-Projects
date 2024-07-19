class More{
    constructor(){
        this.data = new Fetch();
        this.createMore();
    }
    async createMore(){
        this.main = document.querySelector(".main__shows");
        
        this.more = document.createElement("section");
        this.more.classList.add("more");
        this.main.appendChild(this.more);

        this.category = document.createElement("h2");
        this.category.classList.add("more__category");
        this.category.innerText = "More Like This";
        this.more.appendChild(this.category);

        this.list = document.createElement("div");
        this.list.classList.add("more__list");
        this.more.appendChild(this.list);

        const data = await this.data.fetch();
        // const index = 12;

        // for(let i = 0; i < index; i++){
        //     this.image = document.createElement("img");
        //     this.image.classList.add("more__list--image");
        //     this.image.setAttribute("src", data.shows[12].image);
        //     this.list.appendChild(this.image);
        // }

        for(let i = 0; i < data.shows.length; i++){
            if(data.shows[i].type === "Show"){
                this.image = document.createElement("img");
                this.image.classList.add("more__list--image");
                this.image.setAttribute("src", data.shows[i].image);
                this.list.appendChild(this.image);
            }
        }
    }
}

//7:57 (19)
//8:00 (20)