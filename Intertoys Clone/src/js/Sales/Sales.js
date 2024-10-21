class Sales{
    constructor(){
        this.data = new Fetch();
        this.createSales();
    }
    async createSales(){
        this.main = document.querySelector(".main");
        this.sales = document.createElement("section");
        this.sales.classList.add("sales");
        this.main.appendChild(this.sales);

        this.title = document.createElement("h2");
        this.title.classList.add("sales__title");
        this.title.innerText = "De beste aanbiedingen van Intertoys";
        this.sales.appendChild(this.title);

        this.salesWrapper = document.createElement("div");
        this.salesWrapper.classList.add("salesWrapper");
        this.sales.appendChild(this.salesWrapper);
        
        this.left = document.createElement("div");
        this.left.classList.add("sales__left");
        this.salesWrapper.appendChild(this.left);

        this.leftIcon = document.createElement("i");
        this.leftIcon.classList = "fa-solid fa-chevron-left sales__left--icon";
        this.left.appendChild(this.leftIcon);

        this.list = document.createElement("ul");
        this.list.classList.add("sales__list");
        this.salesWrapper.appendChild(this.list);

        const data = await this.data.fetch();
        for(let i = 0; i < data.sales.length; i++){
            this.link = document.createElement("a");
            this.link.classList.add("sales__link");
            this.link.setAttribute("href", data.sales[i].link);
            this.list.appendChild(this.link);

            this.item = document.createElement("li");
            this.item.classList.add("sales__list--item");
            this.link.appendChild(this.item);

            this.image = document.createElement("img");
            this.image.classList.add("sales__list--item-image");
            this.image.setAttribute("src", data.sales[i].image);
            this.item.appendChild(this.image);

            this.details = document.createElement("article");
            this.details.classList.add("sales__list--item-details");
            this.item.appendChild(this.details);

            this.name = document.createElement("p");
            this.name.classList.add("sales__list--item-name");
            this.name.innerText = data.sales[i].title;
            this.details.appendChild(this.name);

            this.price = document.createElement("span");
            this.price.classList.add("sales__list--item-price");
            this.item.appendChild(this.price);

            this.priceText = document.createElement("p");
            this.priceText.classList.add("sales__list--item-priceText");
            this.priceText.innerText = data.sales[i].price;
            this.price.appendChild(this.priceText);
        }
        
        this.right = document.createElement("div");
        this.right.classList.add("sales__right");
        this.salesWrapper.appendChild(this.right);

        this.rightIcon = document.createElement("i");
        this.rightIcon.classList = "fa-solid fa-chevron-right sales__right--icon";
        this.right.appendChild(this.rightIcon);
    }
}

export default Sales;