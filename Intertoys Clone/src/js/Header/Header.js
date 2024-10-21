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

        this.navigation = document.createElement("nav");
        this.navigation.classList.add("header__navigation");
        this.header.appendChild(this.navigation);

        this.figure = document.createElement("span");
        this.figure.classList.add("header__figure");
        this.navigation.appendChild(this.figure);

        this.logoLink = document.createElement("a");
        this.logoLink.classList.add("header__figure--link");
        this.logoLink.setAttribute("href", "");
        this.figure.appendChild(this.logoLink);

        this.logo = document.createElement("img");
        this.logo.classList.add("header__figure--logo");
        this.logo.setAttribute("src", "src/img/logo.png");
        this.logoLink.appendChild(this.logo);

        this.wrapper = document.createElement("span");
        this.wrapper.classList.add("header__wrapper");
        this.navigation.appendChild(this.wrapper);

        this.dropdown = document.createElement("div");
        this.dropdown.classList.add("header__wrapper--dropdown");
        this.dropdown.innerText = "Bekijk alles";
        this.wrapper.appendChild(this.dropdown);

        this.dropdownIcon = document.createElement("i");
        this.dropdownIcon.classList = "fa-solid fa-chevron-down header__wrapper--icon";
        this.wrapper.appendChild(this.dropdownIcon);

        this.searchWrapper = document.createElement("span");
        this.searchWrapper.classList.add("header__search");
        this.navigation.appendChild(this.searchWrapper);

        this.search = document.createElement("input");
        this.search.classList.add("header__search--input");
        this.search.placeholder = "Ik ben op zoek naar...";
        this.searchWrapper.appendChild(this.search);

        this.searchIcon = document.createElement("i");
        this.searchIcon.classList = "fa-solid fa-magnifying-glass header__search--icon";
        this.searchWrapper.appendChild(this.searchIcon);

        this.links = document.createElement("span");
        this.links.classList.add("header__links");
        this.navigation.appendChild(this.links);

        const data = await this.data.fetch();
        for(let i = 0; i < data.headerLinks.length; i++){    
            this.link = document.createElement("a");
            this.link.classList.add(data.headerLinks[i].class);
            this.links.appendChild(this.link);

            this.linkImage = document.createElement("img");
            this.linkImage.classList.add(data.headerLinks[i].imageClass);
            this.linkImage.setAttribute("src", data.headerLinks[i].image);
            this.link.appendChild(this.linkImage);
        }
        
        this.total = document.createElement("div");
        this.total.classList.add("header__links--cart-total");
        this.total.innerText = 0;
        document.querySelector(".header__links--cart").appendChild(this.total);
    }
}

export default Header;