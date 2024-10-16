class Ages{
    constructor(){
        this.data = new Fetch();
        this.createAges();
    }
    async createAges(){
        this.main = document.querySelector(".main");
        
        this.ages = document.createElement("section");
        this.ages.classList.add("ages");
        this.main.appendChild(this.ages);

        this.left = document.createElement("div");
        this.left.classList.add("ages__left");
        this.ages.appendChild(this.left);

        this.leftIcon = document.createElement("i");
        this.leftIcon.classList = "fa-solid fa-chevron-left ages__left--icon";
        this.left.appendChild(this.leftIcon);

        this.agesWrapper = document.createElement("div");
        this.agesWrapper.classList.add("agesWrapper");
        this.ages.appendChild(this.agesWrapper);

        this.title = document.createElement("h2");
        this.title.classList.add("ages__title");
        this.title.innerText = "Populaire leeftijden";
        this.agesWrapper.appendChild(this.title);

        this.list = document.createElement("ul");
        this.list.classList.add("ages__list");
        this.agesWrapper.appendChild(this.list);

        const data = await this.data.fetch();
        for(let i = 0; i < data.ages.length; i++){
            this.link = document.createElement("a");
            this.link.classList.add("ages__list--link");
            this.link.setAttribute("href", data.ages[i].link);
            this.list.appendChild(this.link);

            this.item = document.createElement("li");
            this.item.classList.add("ages__list--item");
            this.link.appendChild(this.item);

            this.image = document.createElement("img");
            this.image.classList.add("ages__list--item-image");
            this.image.setAttribute("src", data.ages[i].image);
            this.item.appendChild(this.image);
        }
        
        this.right = document.createElement("div");
        this.right.classList.add("ages__right");
        this.ages.appendChild(this.right);

        this.rightIcon = document.createElement("i");
        this.rightIcon.classList = "fa-solid fa-chevron-right ages__right--icon";
        this.right.appendChild(this.rightIcon);
    }
}

export default Ages;