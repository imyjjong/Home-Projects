class Brands{
    constructor(){
        this.data = new Fetch();
        this.createBrands();
    }
    async createBrands(){
        this.main = document.querySelector(".main");

        this.brands = document.createElement("section");
        this.brands.classList.add("brands");
        this.main.appendChild(this.brands);

        this.left = document.createElement("div");
        this.left.classList.add("brands__left");
        this.brands.appendChild(this.left);

        this.leftIcon = document.createElement("i");
        this.leftIcon.classList = "fa-solid fa-chevron-left brands__left--icon";
        this.left.appendChild(this.leftIcon);

        this.brandsWrapper = document.createElement("div");
        this.brandsWrapper.classList.add("brandsWrapper");
        this.brands.appendChild(this.brandsWrapper);

        this.title = document.createElement("h2");
        this.title.classList.add("brands__title");
        this.title.innerText = "Leukste merken voor alle leeftijden";
        this.brandsWrapper.appendChild(this.title);

        this.list = document.createElement("ul");
        this.list.classList.add("brands__list");
        this.brandsWrapper.appendChild(this.list);

        const data = await this.data.fetch();
        for(let i = 0; i < data.brands.length; i++){
            this.link = document.createElement("a");
            this.link.classList.add("brands__list--link");
            this.link.setAttribute("href", data.brands[i].link);
            this.list.appendChild(this.link);

            this.item = document.createElement("li");
            this.item.classList.add("brands__list--item");
            this.link.appendChild(this.item);
            
            this.image = document.createElement("img");
            this.image.classList.add("brands__list--item-image");
            this.image.setAttribute("src", data.brands[i].image);
            this.item.appendChild(this.image);
        }

        this.right = document.createElement("div");
        this.right.classList.add("brands__right");
        this.brands.appendChild(this.right);

        this.rightIcon = document.createElement("i");
        this.rightIcon.classList = "fa-solid fa-chevron-right brands__right--icon";
        this.right.appendChild(this.rightIcon);
    }
}

export default Brands;