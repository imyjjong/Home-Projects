class Heading{
    constructor(){
        this.data = new Fetch();
        this.createHeading();
    }
    async createHeading(){
        this.body = document.querySelector("body");

        this.heading = document.createElement("section");
        this.heading.classList.add("heading");
        this.body.appendChild(this.heading);

        const data = await this.data.fetch();
        
        this.image = document.createElement("img");
        this.image.classList.add("heading__image");
        this.image.setAttribute("src", data.shows[0].backdrop);
        this.heading.appendChild(this.image);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("heading__wrapper");
        this.heading.appendChild(this.wrapper);

        this.titleFigure = document.createElement("figure");
        this.titleFigure.classList.add("heading__wrapper--title");
        this.wrapper.appendChild(this.titleFigure);

        this.titleImage = document.createElement("img");
        this.titleImage.classList.add("heading__wrapper--title-image");
        this.titleImage.setAttribute("src", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUTT6x9rAaR5M0OtzUEh8R3S6AZk_p841b2no9rP0-0PNSo0bcqixgOjeexMRaj5leCx-QCuXqDOeUbyloqNkoK_huX3QZDTTN7t1O5dKvq4Iicavs7bYU5lbZtmrACn5jnagCSgt-M2E_nLVaWgadm-JSNpZibIiWH3SNibElZGm0a9BS_VLQ.png?r=5c8");
        this.titleFigure.appendChild(this.titleImage);

        this.buttons = document.createElement("span");
        this.buttons.classList.add("heading__wrapper--buttons");
        this.wrapper.appendChild(this.buttons);


        for(let i = 0; i < data.buttons.length; i++){
            this.button = document.createElement("button");
            this.button.classList.add("heading__wrapper--buttons-button");
            this.button.innerText = data.buttons[i].name;
            this.buttons.appendChild(this.button);

            this.buttonIcon = document.createElement("i");
            this.buttonIcon.classList = data.buttons[i].icon;
            this.button.appendChild(this.buttonIcon);
        }

        this.description = document.createElement("article");
        this.description.classList.add("heading__wrapper--description");
        this.wrapper.appendChild(this.description);

        this.descriptionText = document.createElement("p");
        this.descriptionText.classList.add("heading__wrapper--description-text");
        this.descriptionText.innerText = data.shows[0].description;
        this.description.appendChild(this.descriptionText);
    }
}

class HeadingTV{
    constructor(){
        this.data = new Fetch();
        this.createHeading();
    }
    async createHeading(){
        this.body = document.querySelector("body");

        this.heading = document.createElement("section");
        this.heading.classList.add("heading");
        this.body.appendChild(this.heading);

        const data = await this.data.fetch();
        console.log(localStorage.getItem("tvShow"));
        this.id = localStorage.getItem("tvShow");
        this.image = document.createElement("img");
        this.image.classList.add("heading__image");
        this.image.setAttribute("src", data.shows[this.id].backdrop);
        this.heading.appendChild(this.image);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("heading__wrapper");
        this.heading.appendChild(this.wrapper);

        this.titleFigure = document.createElement("figure");
        this.titleFigure.classList.add("heading__wrapper--title");
        this.wrapper.appendChild(this.titleFigure);

        this.titleImage = document.createElement("img");
        this.titleImage.classList.add("heading__wrapper--title-image");
        this.titleImage.setAttribute("src", data.shows[this.id].titleImage);
        this.titleFigure.appendChild(this.titleImage);

        this.detailsWrapper = document.createElement("span");
        this.detailsWrapper.classList.add("heading__wrapper--details");
        this.wrapper.appendChild(this.detailsWrapper);

        this.match = document.createElement("p");
        this.match.classList.add("heading__wrapper--details-match");
        this.match.innerText = data.shows[this.id].match + " Match";
        this.detailsWrapper.appendChild(this.match);
        
        this.year = document.createElement("p");
        this.year.classList.add("heading__wrapper--details-year");
        this.year.innerText = data.shows[this.id].year;
        this.detailsWrapper.appendChild(this.year);

        this.duration = document.createElement("p");
        this.duration.classList.add("heading__wrapper--details-duration");
        this.duration.innerText = data.shows[this.id].duration;
        this.detailsWrapper.appendChild(this.duration);

        this.age = document.createElement("p");
        this.age.classList.add("heading__wrapper--details-age");
        this.age.innerText = data.shows[this.id].age;
        this.detailsWrapper.appendChild(this.age);

        this.buttons = document.createElement("span");
        this.buttons.classList.add("heading__wrapper--buttons");
        this.wrapper.appendChild(this.buttons);


        for(let i = 0; i < data.buttons.length; i++){
            this.button = document.createElement("button");
            this.button.classList.add("heading__wrapper--buttons-button");
            this.button.innerText = data.buttons[i].name;
            this.buttons.appendChild(this.button);

            this.buttonIcon = document.createElement("i");
            this.buttonIcon.classList = data.buttons[i].icon;
            this.button.appendChild(this.buttonIcon);
        }

        this.description = document.createElement("article");
        this.description.classList.add("heading__wrapper--description");
        this.wrapper.appendChild(this.description);

        this.descriptionText = document.createElement("p");
        this.descriptionText.classList.add("heading__wrapper--description-text");
        this.descriptionText.innerText = data.shows[this.id].description;
        this.description.appendChild(this.descriptionText);
        this.showsTV = new ShowsTV();

    }
}