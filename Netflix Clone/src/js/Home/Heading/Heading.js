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

        this.image = document.createElement("img");
        this.image.classList.add("heading__image");
        this.image.setAttribute("src", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeOVzKnhOs14cmNTdQWaVSJput5HrY8sVs_T65WNDuNgXqxiRfVPgT6N5tIY4EqWsoYcNAYrr6qpLjpRJ8pQfEkRhHMLIH49bmNP.jpg?r=b94");
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

        const data = await this.data.fetch();

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