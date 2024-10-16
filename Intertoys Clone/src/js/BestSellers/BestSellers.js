class BestSellers{
    constructor(){
        this.data = new Fetch();
        this.createBestSellers();
    }
    async createBestSellers(){
        this.main = document.querySelector(".main");
        this.bestsellers = document.createElement("section");
        this.bestsellers.classList.add("bestsellers");
        this.main.appendChild(this.bestsellers);

        this.left = document.createElement("div");
        this.left.classList.add("bestsellers__left");
        this.bestsellers.appendChild(this.left);

        this.leftIcon = document.createElement("i");
        this.leftIcon.classList = "fa-solid fa-chevron-left bestsellers__left--icon";
        this.left.appendChild(this.leftIcon);

        this.bestsellersWrapper = document.createElement("div");
        this.bestsellersWrapper.classList.add("bestsellersWrapper");
        this.bestsellers.appendChild(this.bestsellersWrapper);

        this.title = document.createElement("h2");
        this.title.classList.add("bestsellers__title");
        this.title.innerText = "Het meest verkochte speelgoed";
        this.bestsellersWrapper.appendChild(this.title);

        this.list = document.createElement("ul");
        this.list.classList.add("bestsellers__list");
        this.bestsellersWrapper.appendChild(this.list);

        const data = await this.data.fetch();
        for(let i = 0; i < data.bestsellers.length; i++){
            this.item = document.createElement("li");
            this.item.classList.add("bestsellers__list--item");
            this.list.appendChild(this.item);

            this.image = document.createElement("img");
            this.image.classList.add("bestsellers__list--item-image");
            this.image.setAttribute("src", data.bestsellers[i].image);
            this.item.appendChild(this.image);

            this.details = document.createElement("article");
            this.details.classList.add("bestsellers__list--item-details");
            this.item.appendChild(this.details);

            this.text = document.createElement("p");
            this.text.classList.add("bestsellers__list--item-text");
            this.text.innerText = data.bestsellers[i].title;
            this.details.appendChild(this.text);

            this.price = document.createElement("span");
            this.price.classList.add("bestsellers__list--item-price");
            this.item.appendChild(this.price);
            
            this.priceText = document.createElement("p");
            this.priceText.classList.add("bestsellers__list--item-priceText");
            this.priceText.innerText = data.bestsellers[i].price;
            this.price.appendChild(this.priceText);
        }

        this.right = document.createElement("div");
        this.right.classList.add("bestsellers__right");
        this.bestsellers.appendChild(this.right);

        this.rightIcon = document.createElement("i");
        this.rightIcon.classList = "fa-solid fa-chevron-right bestsellers__right--icon";
        this.right.appendChild(this.rightIcon);

        this.promos = document.createElement("div");
        this.promos.classList.add("bestsellers__promos");
        this.bestsellers.appendChild(this.promos);

        for(let i = 0; i < data.bestsellersPromos.length; i++){
            this.promo = document.createElement("a");
            this.promo.classList.add("bestsellers__promos--link");
            this.promo.setAttribute("href", data.bestsellersPromos[i].link);
            this.promos.appendChild(this.promo);

            this.promoImage = document.createElement("img");
            this.promoImage.classList.add("bestsellers__promo--image");
            this.promoImage.setAttribute("src", data.bestsellersPromos[i].image);
            this.promo.appendChild(this.promoImage);
        }
    }
}

export default BestSellers;