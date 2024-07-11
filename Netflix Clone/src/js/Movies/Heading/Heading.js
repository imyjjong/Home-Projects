class Heading{
    constructor(id){
        this.data = new Fetch();
        this.createHeading();
        this.id = id;
        console.log(this.id);
    }
    async createHeading(){
        this.oldBody = document.querySelector("body");
        this.oldBody.remove();
        this.body = document.createElement("body");
        document.querySelector("html").appendChild(this.body);

        this.header = new Header();

        this.heading = document.createElement("section");
        this.heading.classList.add("movie");
        this.body.appendChild(this.heading);

        const data = await this.data.fetch();

        this.image = document.createElement("img");
        this.image.classList.add("movie__image");
        this.image.setAttribute("src", data.shows[this.id].backdrop);
        this.heading.appendChild(this.image);

        this.information = document.createElement("div");
        this.information.classList.add("movie__information");
        this.heading.appendChild(this.information);

        this.titleImage = document.createElement("img");
        this.titleImage.classList.add("movie__information--image");
        this.titleImage.setAttribute("src", data.shows[this.id].titleImage);
        this.information.appendChild(this.titleImage);

        this.wrapper = document.createElement("span");
        this.wrapper.classList.add("movie__information--wrapper");
        this.information.appendChild(this.wrapper);

        this.match = document.createElement("p");
        this.match.classList.add("movie__information--wrapper-match");
        this.match.innerText = data.shows[this.id].match + " Match";
        this.wrapper.appendChild(this.match);

        this.year = document.createElement("p");
        this.year.classList.add("movie__information--wrapper-year");
        this.year.innerText = data.shows[this.id].year;
        this.wrapper.appendChild(this.year);

        this.duration = document.createElement("p");
        this.duration.classList.add("movie__information--wrapper-duration");
        this.duration.innerText = data.shows[this.id].duration;
        this.wrapper.appendChild(this.duration);

        this.age = document.createElement("p");
        this.age.classList.add("movie__information--wrapper-age");
        this.age.innerText = data.shows[this.id].age;
        this.wrapper.appendChild(this.age);

        this.description = document.createElement("p");
        this.description.classList.add("movie__information--description");
        this.description.innerText = data.shows[this.id].description;
        this.information.appendChild(this.description);

        this.details = document.createElement("article");
        this.details.classList.add("movie__information--details");
        this.information.appendChild(this.details);

        this.starring = document.createElement("p");
        this.starring.classList.add("movie__information--details-starring");
        this.starring.innerText = data.shows[this.id].starring;
        this.details.appendChild(this.starring);

        this.genres = document.createElement("p");
        this.genres.classList.add("movie__information--details-genres");
        this.genres.innerText = data.shows[this.id].genre;
        this.details.appendChild(this.genres);
        this.movies = new Movies();
    }
}

//6:12
//6:30