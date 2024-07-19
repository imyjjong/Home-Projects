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

class HeadingTV{
    constructor(){
        this.data = new Fetch();
        this.createHeading();
    }
    async createHeading(){
        this.id = 16;
        this.body = document.querySelector("body");

        this.heading = document.createElement("section");
        this.heading.classList.add("movieHeading");
        this.body.appendChild(this.heading);

        const data = await this.data.fetch();

        this.image = document.createElement("img");
        this.image.classList.add("movieHeading__image");
        this.image.setAttribute("src", data.shows[this.id].backdrop);
        this.heading.appendChild(this.image);

        this.information = document.createElement("div");
        this.information.classList.add("movieHeading__information");
        this.heading.appendChild(this.information);

        this.titleImage = document.createElement("img");
        this.titleImage.classList.add("movieHeading__information--image");
        this.titleImage.setAttribute("src", data.shows[this.id].titleImage);
        this.information.appendChild(this.titleImage);

        this.wrapper = document.createElement("span");
        this.wrapper.classList.add("movieHeading__information--wrapper");
        this.information.appendChild(this.wrapper);

        this.match = document.createElement("p");
        this.match.classList.add("movieHeading__information--wrapper-match");
        this.match.innerText = data.shows[this.id].match + " Match";
        this.wrapper.appendChild(this.match);

        this.year = document.createElement("p");
        this.year.classList.add("movieHeading__information--wrapper-year");
        this.year.innerText = data.shows[this.id].year;
        this.wrapper.appendChild(this.year);

        this.duration = document.createElement("p");
        this.duration.classList.add("movieHeading__information--wrapper-duration");
        this.duration.innerText = data.shows[this.id].duration;
        this.wrapper.appendChild(this.duration);

        this.age = document.createElement("p");
        this.age.classList.add("movieHeading__information--wrapper-age");
        this.age.innerText = data.shows[this.id].age;
        this.wrapper.appendChild(this.age);

        this.description = document.createElement("p");
        this.description.classList.add("movieHeading__information--description");
        this.description.innerText = data.shows[this.id].description;
        this.information.appendChild(this.description);

        this.details = document.createElement("span");
        this.details.classList.add("movieHeading__information--details");
        this.information.appendChild(this.details);

        this.actors = document.createElement("p");
        this.actors.classList.add("movieHeading__information--details-actors");
        this.actors.innerText = data.shows[this.id].starring;
        this.details.appendChild(this.actors);

        this.genre = document.createElement("p");
        this.genre.classList.add("movieHeading__information--details-genres");
        this.genre.innerText = data.shows[this.id].genre;
        this.details.appendChild(this.genre);

        this.movies = document.createElement("section");
        this.movies.classList.add("movies");
        this.heading.appendChild(this.movies);

        this.category = document.createElement("h2");
        this.category.classList.add("movies__category");
        this.category.innerText = "Top Movies On Netlix";
        this.movies.appendChild(this.category);

        this.moviesList = document.createElement("div");
        this.moviesList.classList.add("movies__list");
        this.movies.appendChild(this.moviesList);
        
        for(let i = 0; i < data.shows.length; i++){
            if(data.shows[i].type === "Movie"){
                this.link = document.createElement("a");
                this.link.classList.add("movies__link");
                this.link.setAttribute("href", "javascript:void(0)");
                this.link.setAttribute("id", data.shows[i].id);
                this.moviesList.appendChild(this.link);

                this.movie = document.createElement("article");
                this.movie.classList.add("movie");
                this.link.appendChild(this.movie);

                this.movieImage = document.createElement("img");
                this.movieImage.classList.add("movie__image");
                this.movieImage.setAttribute("src", data.shows[i].image);
                this.movie.appendChild(this.movieImage);
            }
        }
        this.movieFocus();
    }
    async movieFocus(){
        const data = await this.data.fetch();
        this.getMovies = document.getElementsByClassName("movies__link");
        for(let i = 0; i < this.getMovies.length; i++){
            this.getMovies[i].onfocus = () => {
                this.id = this.getMovies[i].id;
                document.querySelector(".movieHeading__image").setAttribute("src", data.shows[this.id].backdrop);
                document.querySelector(".movieHeading__information--image").setAttribute("src", data.shows[this.id].titleImage);
                document.querySelector(".movieHeading__information--wrapper-match").innerText = data.shows[this.id].match + " Match";
                document.querySelector(".movieHeading__information--wrapper-year").innerText = data.shows[this.id].year;
                document.querySelector(".movieHeading__information--wrapper-duration").innerText = data.shows[this.id].duration;
                document.querySelector(".movieHeading__information--wrapper-age").innerText = data.shows[this.id].age;
                document.querySelector(".movieHeading__information--description").innerText = data.shows[this.id].description;
                document.querySelector(".movieHeading__information--details-actors").innerText = data.shows[this.id].starring;
                document.querySelector(".movieHeading__information--details-genres").innerText = data.shows[this.id].genre;
            }
        }
    }
}

//6:12
//6:this.id0