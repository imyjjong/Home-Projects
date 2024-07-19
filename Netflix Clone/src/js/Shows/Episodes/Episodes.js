class Episodes{
    constructor(){
        this.data = new Fetch();
        this.createMain();
    }
    createMain(){
        this.body = document.querySelector("body");

        this.main = document.createElement("main");
        this.main.classList.add("main__shows");
        this.body.appendChild(this.main);

        this.createEpisodes();
    }
    async createEpisodes(){
        this.episodes = document.createElement("section");
        this.episodes.classList.add("episodes");
        this.main.appendChild(this.episodes);

        this.wrapper = document.createElement("span");
        this.wrapper.classList.add("episodes__wrapper");
        this.episodes.appendChild(this.wrapper);

        this.text = document.createElement("h2");
        this.text.classList.add("episodes__wrapper--text");
        this.text.innerText = "Episodes | ";
        this.wrapper.appendChild(this.text);

        const data = await this.data.fetch();

        this.title = document.createElement("h3");
        this.title.classList.add("episodes__wrapper--title");
        this.title.innerText = data.shows[8].title;
        this.wrapper.appendChild(this.title);
        
        this.dropdown = document.createElement("select");
        this.dropdown.classList.add("episodes__dropdown");
        this.episodes.appendChild(this.dropdown);

        const seasons = data.shows[8].duration;
        this.index = 0;
        for(let i = 0; i < seasons; i++){
            this.index++;
            this.option = document.createElement("option");
            this.option.classList.add("episodes__dropdown--option");
            this.option.setAttribute("value", this.index);
            this.option.innerText = "Season " + this.index;
            this.dropdown.appendChild(this.option);
        }

        this.list = document.createElement("div");
        this.list.classList.add("episodes__list");
        this.episodes.appendChild(this.list);

        this.seasonSelect();
    }
    seasonSelect(){
        this.dropbox = document.querySelector(".episodes__dropdown");
        this.loadEpisodes(this.season);
        this.season = this.dropbox.value;
        this.dropbox.onchange = () => {
            this.season = this.dropbox.value;
            this.loadEpisodes(this.season);
        }
    }
    async loadEpisodes(season){
        this.season = season;
        this.list.innerHTML = "";
        const data = await this.data.fetch();
        for(let i = 0; i < data.episodes.length; i++){
            if(data.episodes[i].season == this.season){
                this.episode = document.createElement("article");
                this.episode.classList.add("episode");
                this.list.appendChild(this.episode);

                this.episodeWrapper = document.createElement("div");
                this.episodeWrapper.classList.add("episode__wrapper");
                this.episode.appendChild(this.episodeWrapper);

                this.image = document.createElement("img");
                this.image.classList.add("episode__wrapper--image");
                this.image.setAttribute("src", data.episodes[i].image);
                this.episodeWrapper.appendChild(this.image);

                this.information = document.createElement("span");
                this.information.classList.add("episode__wrapper--information");
                this.episodeWrapper.appendChild(this.information);

                this.episodeTitle = document.createElement("h3");
                this.episodeTitle.classList.add("episode__wrapper--information-title");
                this.episodeTitle.innerText = data.episodes[i].title;
                this.information.appendChild(this.episodeTitle);

                this.description = document.createElement("p");
                this.description.classList.add("episode__description");
                this.description.innerText = data.episodes[i].description;
                this.episode.appendChild(this.description);
            }
        }
    }
}

//7:34 (19)
//7:55 (19)