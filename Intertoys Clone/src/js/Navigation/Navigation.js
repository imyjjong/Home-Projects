class Navigation{
    constructor(){
        this.data = new Fetch();
        this.createNavigation();
    }
    async createNavigation(){
        this.body = document.querySelector("body");

        this.navigation = document.createElement("nav");
        this.navigation.classList.add("navigation");
        this.body.appendChild(this.navigation);

        this.list = document.createElement("ul");
        this.list.classList.add("navigation__list");
        this.navigation.appendChild(this.list);

        const data = await this.data.fetch();
        for(let i = 0; i < data.navigation.length; i++){
            this.listItem = document.createElement("li");
            this.listItem.classList.add("navigation__list--item");
            this.listItem.innerText = data.navigation[i].item;
            this.list.appendChild(this.listItem);
        }
        
        this.linkList = document.createElement("ul");
        this.linkList.classList.add("navigation__links");
        this.navigation.appendChild(this.linkList);

        for(let i = 0; i < data.navLinks.length; i++){
            this.listLink = document.createElement("a");
            this.listLink.classList.add("navigation__links--link");
            this.listLink.setAttribute("href", data.navLinks[i].link);
            this.linkList.appendChild(this.listLink);

            this.linkItem = document.createElement("li");
            this.linkItem.classList.add("navigation__links--item");
            this.linkItem.innerText = data.navLinks[i].item;
            this.listLink.appendChild(this.linkItem);
        }
    }
}

export default Navigation;