class Movies{
    constructor(){
        this.data = new Fetch();
        this.createMain();
    }
    createMain(){
        this.body = document.querySelector("body");

        this.main = document.createElement("main");
        this.main.classList.add("main__movies");
        this.body.appendChild(this.main);

        this.createMovies();
    }
    async createMovies(){
        this.movies = document.createElement("section");
        this.movies.classList.add("movies");
        this.main.appendChild(this.movies);

        this.category = document.createElement("h3");
        this.category.classList.add("movies__category");
        this.category.innerText = "Popular on Netflix";
        this.movies.appendChild(this.category);

        this.list = document.createElement("div");
        this.list.classList.add("movies__list");
        this.movies.appendChild(this.list);
        
        const data = await this.data.fetch();
        for(let i = 0; i < data.shows.length; i++){
            if(data.shows[i].type === "Movie"){
                this.link = document.createElement("a");
                this.link.classList.add("movies__list--link");
                this.link.setAttribute("href", "javascript:void(0)");
                this.link.setAttribute("id", data.shows[i].id);
                this.list.appendChild(this.link);

                this.movie = document.createElement("article");
                this.movie.classList.add("movies__movie");
                this.link.appendChild(this.movie);

                this.image = document.createElement("img");
                this.image.classList.add("movies__movie--image");
                this.image.setAttribute("src", data.shows[i].image);
                this.movie.appendChild(this.image);
            }
        }
        this.changeHeading();
    }
    changeHeading(){
        this.getMovies = document.getElementsByClassName("movies__list--link");
        for(let i = 0; i < this.getMovies.length; i++){
            this.getMovies[i].onclick = () => {
                window.localStorage.setItem("getMovie", this.getMovies[i].id);
                this.getMovie();
            }
        }
    }
    async getMovie(){
        this.id = window.localStorage.getItem("getMovie");
        const data = await this.data.fetch();
        for(let i = 0; i < data.shows.length; i++){
            if(data.shows[i].type === "Movie"){
                console.log(data.shows[this.id].title);

                console.log(this.id);
                this.heading = new Heading(this.id);
            }
        }
    }

}

//6:31
//6:41