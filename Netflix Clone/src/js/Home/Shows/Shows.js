class Shows{
    constructor(){
        this.data = new Fetch();
        this.createMain();
    }
    createMain(){
        this.body = document.querySelector("body");
        
        this.main = document.createElement("main");
        this.main.classList.add("main");
        this.body.appendChild(this.main);

        this.createShows(this.main);
    }
    async createShows(){
        this.shows = document.createElement("section");
        this.shows.classList.add("shows");
        this.main.appendChild(this.shows);

        this.category = document.createElement("h3");
        this.category.classList.add("shows__category");
        this.category.innerText = "Top Picks For You";
        this.shows.appendChild(this.category);

        this.list = document.createElement("div");
        this.list.classList.add("shows__list");
        this.shows.appendChild(this.list);
        
        const data = await this.data.fetch();

        for(let i = 0; i < data.shows.length; i++){
            this.show = document.createElement("article");
            this.show.classList.add("show");
            this.list.appendChild(this.show);

            this.image = document.createElement("img");
            this.image.classList.add("show__image");
            this.image.setAttribute("src", data.shows[i].cover);
            this.show.appendChild(this.image);

            this.information = document.createElement("div");
            this.information.classList.add("show__information");
            this.show.appendChild(this.information);

            this.play = document.createElement("div");
            this.play.classList.add("show__information--play");
            this.information.appendChild(this.play);

            this.playIcon = document.createElement("i");
            this.playIcon.classList = "fa-solid fa-play show__information--play-button";
            this.play.appendChild(this.playIcon);

            this.title = document.createElement("h3");
            this.title.classList.add("show__information--title");
            this.title.innerText = data.shows[i].title;
            this.information.appendChild(this.title);

            this.wrapper = document.createElement("span");
            this.wrapper.classList.add("show__information--wrapper");
            this.information.appendChild(this.wrapper);

            this.match = document.createElement("p");
            this.match.classList.add("show__information--wrapper-match");
            this.match.innerText = data.shows[i].match + " Match";
            this.wrapper.appendChild(this.match);

            this.year = document.createElement("p");
            this.year.classList.add("show__information--wrapper-year");
            this.year.innerText = data.shows[i].year;
            this.wrapper.appendChild(this.year);

            this.age = document.createElement("p");
            this.age.classList.add("show__information--wrapper-age");
            this.age.innerText = data.shows[i].age;
            this.wrapper.appendChild(this.age);

            this.duration = document.createElement("p");
            this.duration.classList.add("show__information--wrapper-duration");
            this.duration.innerText = data.shows[i].duration;
            this.wrapper.appendChild(this.duration);

            this.description = document.createElement("p");
            this.description.classList.add("show__information--description");
            this.description.innerText = data.shows[i].description;
            this.information.appendChild(this.description);

            this.arrow = document.createElement("div");
            this.arrow.classList.add("show__information--arrow");
            this.information.appendChild(this.arrow);
            
            this.arrowIcon = document.createElement("i");
            this.arrowIcon.classList = "fa-solid fa-chevron-down show__information--arrow-button";
            this.arrow.appendChild(this.arrowIcon);
        }
    }
}

class ShowsTV{
    constructor(){
        this.data = new Fetch();
        this.createShows();
    }
    async createShows(){
        this.heading = document.querySelector(".heading");
        this.shows = document.createElement("section");
        this.shows.classList.add("shows");
        this.heading.appendChild(this.shows);

        this.category = document.createElement("h3");
        this.category.classList.add("shows__category");
        this.category.innerText = "Top Picks For You";
        this.shows.appendChild(this.category);

        this.list = document.createElement("div");
        this.list.classList.add("shows__list");
        this.shows.appendChild(this.list);
        
        const data = await this.data.fetch();

        for(let i = 0; i < data.shows.length; i++){
            this.link = document.createElement("a");
            this.link.classList.add("show__link");
            this.link.setAttribute("href", "javascript:void(0)");
            this.list.appendChild(this.link);

            this.show = document.createElement("article");
            this.show.classList.add("show");
            this.link.appendChild(this.show);

            this.image = document.createElement("img");
            this.image.classList.add("show__image");
            this.image.setAttribute("src", data.shows[i].poster);
            this.show.appendChild(this.image);

            this.wrapper = document.createElement("div");
            this.wrapper.classList.add("show__wrapper");
            this.link.appendChild(this.wrapper);

            this.wrapperImage = document.createElement("img");
            this.wrapperImage.classList.add("show__wrapper--image");
            this.wrapperImage.setAttribute("src", data.shows[i].cover);
            this.wrapper.appendChild(this.wrapperImage);
        }
        this.showFocus();
    }
    async showFocus(){
        const data = await this.data.fetch();
        this.getShows = document.getElementsByClassName("show__link");
        this.id = localStorage.getItem("tvShow");
        this.getShows[this.id].focus();
        document.getElementsByClassName("show")[this.id].style.display = "none";
        document.getElementsByClassName("show__wrapper")[this.id].style.display = "block";
        for(let i = 0; i < this.getShows.length; i++){
            this.getShows[i].onfocus = () => {
                document.getElementsByClassName("show")[i].style.display = "none";
                document.getElementsByClassName("show__wrapper")[i].style.display = "block";
                console.log(data.shows[i]);
                window.localStorage.setItem("tvShow", [i]);
                document.querySelector(".heading__image").setAttribute("src", data.shows[i].backdrop);
                document.querySelector(".heading__wrapper--title-image").setAttribute("src", data.shows[i].titleImage);
                document.querySelector(".heading__wrapper--details-match").innerText = data.shows[i].match + " Match";
                document.querySelector(".heading__wrapper--details-year").innerText = data.shows[i].year;
                document.querySelector(".heading__wrapper--details-duration").innerText = data.shows[i].duration;
                document.querySelector(".heading__wrapper--details-age").innerText = data.shows[i].age;
                document.querySelector("heading__wrapper--description").innerText = data.shows[i].description;
            }
            this.getShows[i].onblur = () => {
                document.getElementsByClassName("show")[i].style.display = "block";
                document.getElementsByClassName("show__wrapper")[i].style.display = "none";
            }
        }
    }
}