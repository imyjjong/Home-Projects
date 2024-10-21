class Heading{
    constructor(){
        this.data = new Fetch();
        this.createHeading();
    }
    async createHeading(){
        this.body = document.querySelector("body");

        this.main = document.createElement("main");
        this.main.classList.add("main");
        this.body.appendChild(this.main);

        this.heading = document.createElement("section");
        this.heading.classList.add("heading");
        this.main.appendChild(this.heading);

        this.banner = document.createElement("img");
        this.banner.classList.add("heading__banner");
        this.banner.setAttribute("src", "src/img/playbook.png");
        this.heading.appendChild(this.banner);

        this.headingWrapper = document.createElement("div");
        this.headingWrapper.classList.add("headingWrapper");
        this.heading.appendChild(this.headingWrapper);

        this.title = document.createElement("h2");
        this.title.classList.add("heading__popular--title");
        this.title.innerText = "De populaire categorieën speelgoed";
        this.headingWrapper.appendChild(this.title);

        this.popular = document.createElement("div");
        this.popular.classList.add("heading__popular");
        this.headingWrapper.appendChild(this.popular);

        this.left = document.createElement("div");
        this.left.classList.add("heading__left");
        this.popular.appendChild(this.left);

        this.leftIcon = document.createElement("i");
        this.leftIcon.classList = "fa-solid fa-chevron-left heading__left--icon";
        this.left.appendChild(this.leftIcon);

        this.list = document.createElement("ul");
        this.list.classList.add("heading__popular--list");
        this.popular.appendChild(this.list);

        const data = await this.data.fetch();
        for(let i = 0; i < data.popular.length; i++){
            this.item = document.createElement("li");
            this.item.classList.add("heading__popular--list-item");
            this.list.appendChild(this.item);

            this.image = document.createElement("img");
            this.image.classList.add("heading__popular--list-image");
            this.image.setAttribute("src", data.popular[i].image);
            this.item.appendChild(this.image);
        }

        this.right = document.createElement("div");
        this.right.classList.add("heading__right");
        this.popular.appendChild(this.right);

        this.rightIcon = document.createElement("i");
        this.rightIcon.classList = "fa-solid fa-chevron-right heading__right--icon";
        this.right.appendChild(this.rightIcon);

        this.promos = document.createElement("span");
        this.promos.classList.add("heading__promos");
        this.heading.appendChild(this.promos);

        for(let i = 0; i < data.promos.length; i++){
            this.promo = document.createElement("img");
            this.promo.classList.add("heading__promos--promo");
            this.promo.setAttribute("src", data.promos[i].image);
            this.promos.appendChild(this.promo);
        }

    }
}

export default Heading;