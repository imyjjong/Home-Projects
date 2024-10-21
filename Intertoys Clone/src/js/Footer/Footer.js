class Footer{
    constructor(){
        this.data = new Fetch();
        this.createFooter();
        this.createNews();
        this.createLinks();
        this.createInfo();
    }
    createFooter(){
        this.body = document.querySelector("body");
        this.footer = document.createElement("footer");
        this.footer.classList.add("footer");
        this.body.appendChild(this.footer);
    }
    createNews(){
        this.news = document.createElement("section");
        this.news.classList.add("footer__news");
        this.footer.appendChild(this.news);

        this.newsTitle = document.createElement("h3");
        this.newsTitle.classList.add("footer__news--title");
        this.newsTitle.innerText = "Meld je aan voor onze nieuwsbrief";
        this.news.appendChild(this.newsTitle);

        this.newsText = document.createElement("p");
        this.newsText.classList.add("footer__news--text");
        this.newsText.innerText = "Blijf op de hoogte van het nieuwste speelgoed en de beste aanbiedingen";
        this.news.appendChild(this.newsText);

        this.newsButton = document.createElement("button");
        this.newsButton.classList.add("footer__news--button");
        this.newsButton.innerText = "Inschrijven";
        this.news.appendChild(this.newsButton);
    }
    async createLinks(){
        this.links = document.createElement("section");
        this.links.classList.add("footer__links");
        this.footer.appendChild(this.links);

        const data = await this.data.fetch();
        for(let i = 0; i < data.footer.length; i++){
            this.row = document.createElement("article");
            this.row.classList.add("footer__row");
            this.links.appendChild(this.row);

            this.rowTitle = document.createElement("h3");
            this.rowTitle.classList.add("footer__row--title");
            this.rowTitle.innerText = data.footer[i].title;
            this.row.appendChild(this.rowTitle);

            this.list = document.createElement("ul");
            this.list.classList.add("footer__row--list");
            this.row.appendChild(this.list);

            let dataString = data.footer[i].rowItems;
            for(let i = 0; i < dataString.length; i++){
                this.link = document.createElement("a");
                this.link.classList.add("footer__row--list-link");
                this.link.setAttribute("href", dataString[i].link);
                this.list.appendChild(this.link);

                this.item = document.createElement("li");
                this.item.classList.add("footer__row--list-item");
                this.item.innerText = dataString[i].title;
                this.link.appendChild(this.item);
            }
        }

        this.socials = document.createElement("div");
        this.socials.classList.add("footer__socials");
        this.links.appendChild(this.socials);

        this.socialsTitle = document.createElement("h3");
        this.socialsTitle.classList.add("footer__socials--title");
        this.socialsTitle.innerText = "Volg ons";
        this.socials.appendChild(this.socialsTitle);

        this.wrapper = document.createElement("span");
        this.wrapper.classList.add("footer__socials--wrapper");
        this.socials.appendChild(this.wrapper);

        for(let i = 0; i < data.socials.length; i++){
            this.social = document.createElement("a");
            this.social.classList.add("footer__socials--link");
            this.social.setAttribute("href", data.socials[i].link);
            this.wrapper.appendChild(this.social);

            this.socialIcon = document.createElement("i");
            this.socialIcon.classList = data.socials[i].class;
            this.social.appendChild(this.socialIcon);
        }

        this.kite = document.createElement("div");
        this.kite.classList.add("footer__kite");
        this.links.appendChild(this.kite);
    }
    async createInfo(){
        this.info = document.createElement("section");
        this.info.classList.add("footer__info");
        this.footer.appendChild(this.info);

        this.details = document.createElement("div");
        this.details.classList.add("footer__details");
        this.info.appendChild(this.details);

        this.payments = document.createElement("span");
        this.payments.classList.add("footer__details--payments");
        this.details.appendChild(this.payments);

        this.payment = document.createElement("img");
        this.payment.classList.add("footer__details--payments-image");
        this.payment.setAttribute("src", "src/img/payments.png");
        this.payments.appendChild(this.payment);

        this.thuiswinkel = document.createElement("span");
        this.thuiswinkel.classList.add("footer__details--thuiswinkel");
        this.details.appendChild(this.thuiswinkel);

        this.thuiswinkelImage = document.createElement("img");
        this.thuiswinkelImage.classList.add("footer__details--thuiswinkel-image");
        this.thuiswinkelImage.setAttribute("src", "src/img/thuiswinkel.png");
        this.thuiswinkel.appendChild(this.thuiswinkelImage);

        this.beststores = document.createElement("span");
        this.beststores.classList.add("footer__details--beststore");
        this.details.appendChild(this.beststores);

        const data = await this.data.fetch();
        for(let i = 0; i < data.beststore.length; i++){
            this.beststore = document.createElement("img");
            this.beststore.classList.add("footer__details--beststore-image");
            this.beststore.setAttribute("src", data.beststore[i].image);
            this.beststores.appendChild(this.beststore);
        }
        
        this.infoSpan = document.createElement("span");
        this.infoSpan.classList.add("footer__details--info");
        this.details.appendChild(this.infoSpan);

        for(let i = 0; i < data.info.length; i++){
            this.infoLink = document.createElement("a");
            this.infoLink.classList.add("footer__details--info-link");
            this.infoLink.setAttribute("href", data.info[i].link);
            this.infoLink.innerText = data.info[i].name;
            this.infoSpan.appendChild(this.infoLink);
        }

        this.infoItem = document.createElement("p");
        this.infoItem.classList.add("footer__details--info-item");
        this.infoItem.innerText = "©2024 Intertoys";
        this.infoSpan.appendChild(this.infoItem);
    
        this.rating = document.createElement("div");
        this.rating.classList.add("footer__rating");
        this.info.appendChild(this.rating);

        this.ratingWrapper = document.createElement("span");
        this.ratingWrapper.classList.add("footer__rating--wrapper");
        this.rating.appendChild(this.ratingWrapper);

        this.stars = document.createElement("div");
        this.stars.classList.add("footer__rating--stars");
        this.rating.appendChild(this.stars);

        for(let i = 0; i < 5; i++){
            this.star = document.createElement("p");
            this.star.classList.add("footer__rating--star");
            this.star.innerHTML = "&#9733;";
            this.stars.appendChild(this.star);
        }

        this.scores = document.createElement("span");
        this.scores.classList.add("footer__rating--scores");
        this.rating.appendChild(this.scores);

        this.score = document.createElement("p");
        this.score.classList.add("footer__rating--scores-score");
        this.score.innerText = "4,22";
        this.scores.appendChild(this.score);

        this.good = document.createElement("p");
        this.good.classList.add("footer__rating--scores-good");
        this.good.innerText = "Goed";
        this.scores.appendChild(this.good);

        this.reviews = document.createElement("p");
        this.reviews.classList.add("footer__rating--scores-reviews");
        this.reviews.innerText = "9.098 Beoordelingen";
        this.scores.appendChild(this.reviews);

        this.elogo = document.createElement("p");
        this.elogo.classList.add("footer__rating--scores-elogo");
        this.elogo.innerText = "e";
        this.scores.appendChild(this.elogo);

        this.pricesNote = document.createElement("div");
        this.pricesNote.classList.add("footer__pricesNote");
        this.pricesNote.innerText = "Alle prijzen zijn inclusief BTW en andere heffingen en exclusief verzendkosten.";
        this.info.appendChild(this.pricesNote);
    }
}

export default Footer;