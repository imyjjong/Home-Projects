class Header{
    constructor(){
        this.data = new Fetch();
        this.createHeader();
    }
    async createHeader(){
        this.body = document.querySelector("body");

        this.header = document.createElement("header");
        this.header.classList.add("header");
        this.body.appendChild(this.header);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("header__wrapper");
        this.header.appendChild(this.wrapper);

        this.logo = document.createElement("img");
        this.logo.classList.add("header__logo")
        this.logo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png");
        this.wrapper.appendChild(this.logo);

        this.navigation = document.createElement("nav");
        this.navigation.classList.add("header__navigation");
        this.wrapper.appendChild(this.navigation);

        const data = await this.data.fetch();
        for(let i = 0; i < data.navItems.length; i++){
            this.navigationItem = document.createElement("a");
            this.navigationItem.classList.add("header__navigation--item");
            this.navigationItem.setAttribute("href", data.navItems[i].link);
            this.navigationItem.innerText = data.navItems[i].name;
            this.navigation.appendChild(this.navigationItem);
        }

        this.list = document.createElement("ul");
        this.list.classList.add("header__list");
        this.header.appendChild(this.list);

        this.search = document.createElement("li");
        this.search.classList.add("header__list--item");
        this.list.appendChild(this.search);
        
        this.searchIcon = document.createElement("i");
        this.searchIcon.classList = "fa-solid fa-magnifying-glass";
        this.search.appendChild(this.searchIcon);

        for(let i = 0; i < data.listItems.length; i++){
            this.listItem = document.createElement("li");
            this.listItem.classList.add("header__list--item");
            this.listItem.innerText = data.listItems[i].name;
            this.list.appendChild(this.listItem);
        }

        this.bell = document.createElement("li");
        this.bell.classList.add("header__list--item");
        this.list.appendChild(this.bell);

        this.bellIcon = document.createElement("li");
        this.bellIcon.classList = "fa-regular fa-bell";
        this.bell.appendChild(this.bellIcon);

        this.avatar = document.createElement("li");
        this.avatar.classList.add("header__list--item");
        this.list.appendChild(this.avatar);

        this.avatarImage = document.createElement("img");
        this.avatarImage.classList.add("header__list--item-avatar");
        this.avatarImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png");
        this.avatar.appendChild(this.avatarImage);
    }
}