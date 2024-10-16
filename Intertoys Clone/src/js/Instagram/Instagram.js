class Instagram{
    constructor(){
        this.data = new Fetch();
        this.createInstagram();
    }
    async createInstagram(){
        this.main = document.querySelector(".main");

        this.instagram = document.createElement("section");
        this.instagram.classList.add("instagram");
        this.main.appendChild(this.instagram);
        
        this.left = document.createElement("div");
        this.left.classList.add("instagram__left");
        this.instagram.appendChild(this.left);

        this.leftIcon = document.createElement("i");
        this.leftIcon.classList = "fa-solid fa-chevron-left instagram__left--icon";
        this.left.appendChild(this.leftIcon);

        this.instagramWrapper = document.createElement("div");
        this.instagramWrapper.classList.add("instagramWrapper");
        this.instagram.appendChild(this.instagramWrapper);

        this.wrapper = document.createElement("span");
        this.wrapper.classList.add("instagram__wrapper");
        this.instagramWrapper.appendChild(this.wrapper);

        this.icon = document.createElement("i");
        this.icon.classList = "fa-brands fa-instagram instagram__icon";
        this.wrapper.appendChild(this.icon);

        this.title = document.createElement("h2");
        this.title.classList.add("instagram__title");
        this.title.innerText = "Tag jouw Intertoys speelgoed met #intertoys + @intertoys op Instagram";
        this.wrapper.appendChild(this.title);

        this.list = document.createElement("ul");
        this.list.classList.add("instagram__list");
        this.instagramWrapper.appendChild(this.list);

        const data = await this.data.fetch();
        for(let i = 0; i < data.instagram.length; i++){
            this.item = document.createElement("li");
            this.item.classList.add("instagram__list--item");
            this.list.appendChild(this.item);

            this.image = document.createElement("img");
            this.image.classList.add("instagram__list--item-image");
            this.image.setAttribute("src", data.instagram[i].image);
            this.item.appendChild(this.image);

            this.username = document.createElement("p");
            this.username.classList.add("instagram__list--item-username");
            this.username.innerText = data.instagram[i].username;
            this.item.appendChild(this.username);
        }

        this.inspiration = document.createElement("div");
        this.inspiration.classList.add("instagram__inspiration");
        this.instagramWrapper.appendChild(this.inspiration);

        this.inspirationButton = document.createElement("button");
        this.inspirationButton.classList.add("instagram__inspiration--button");
        this.inspirationButton.innerText = "Meer inspiratie";
        this.inspiration.appendChild(this.inspirationButton);

        this.right = document.createElement("div");
        this.right.classList.add("instagram__right");
        this.instagram.appendChild(this.right);

        this.rightIcon = document.createElement("i");
        this.rightIcon.classList = "fa-solid fa-chevron-right instagram__right--icon";
        this.right.appendChild(this.rightIcon);
    }
}

export default Instagram;