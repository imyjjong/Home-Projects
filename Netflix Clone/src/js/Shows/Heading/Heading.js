class Heading{
    constructor(){
        this.data = new Fetch();
        this.createHeading();
    }
    async createHeading(){
        this.body = document.querySelector("body");

        this.heading = document.createElement("section");
        this.heading.classList.add("seriesHeading");
        this.body.appendChild(this.heading);

        const data = await this.data.fetch();

        this.image = document.createElement("img");
        this.image.classList.add("seriesHeading__image");
        this.image.setAttribute("src", data.shows[8].backdrop);
        this.heading.appendChild(this.image);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("seriesHeading__wrapper");
        this.heading.appendChild(this.wrapper);

        this.titleImage = document.createElement("img");
        this.titleImage.classList.add("seriesHeading__wrapper--image");
        this.titleImage.setAttribute("src", data.shows[8].titleImage);
        this.wrapper.appendChild(this.titleImage);

        this.title = document.createElement("h2");
        this.title.classList.add("seriesHeading__wrapper--title");
        this.title.innerText = data.shows[8].title;
        this.wrapper.appendChild(this.title);

        this.information = document.createElement("span");
        this.information.classList.add("seriesHeading__wrapper--information");
        this.wrapper.appendChild(this.information);

        this.match = document.createElement("p");
        this.match.classList.add("seriesHeading__wrapper--information-match");
        this.match.innerText = data.shows[8].match + " Match";
        this.information.appendChild(this.match);

        this.year = document.createElement("p");
        this.year.classList.add("seriesHeading__wrapper--information-year");
        this.year.innerText = data.shows[8].year;
        this.information.appendChild(this.year);
        
        this.age = document.createElement("p");
        this.age.classList.add("seriesHeading__wrapper--information-age");
        this.age.innerText = data.shows[8].age;
        this.information.appendChild(this.age);

        this.duration = document.createElement("p");
        this.duration.classList.add("seriesHeading__wrapper--information-duration");
        this.duration.innerText = data.shows[8].duration + " Seasons";
        this.information.appendChild(this.duration);

        this.genre = document.createElement("p");
        this.genre.classList.add("seriesHeading__wrapper--information-genre");
        this.genre.innerText = data.shows[8].genre;
        this.information.appendChild(this.genre);

        this.description = document.createElement("p");
        this.description.classList.add("seriesHeading__wrapper--description");
        this.description.innerText = data.shows[8].description;
        this.wrapper.appendChild(this.description);

        this.details = document.createElement("div");
        this.details.classList.add("seriesHeading__wrapper--details");
        this.wrapper.appendChild(this.details);

        this.starringSpan = document.createElement("span");
        this.starringSpan.classList.add("seriesHeading__wrapper--details-starring");
        this.starringSpan.innerText = "Starring: ";
        this.details.appendChild(this.starringSpan);

        this.starring = document.createElement("p");
        this.starring.classList.add("seriesHeading__wrapper--details-text");
        this.starring.innerText = data.shows[8].starring;
        this.starringSpan.appendChild(this.starring);

        this.creatorsSpan = document.createElement("span");
        this.creatorsSpan.classList.add("seriesHeading__wrapper--details-creators");
        this.creatorsSpan.innerText = "Creators: ";
        this.details.appendChild(this.creatorsSpan);

        this.creators = document.createElement("p");
        this.creators.classList.add("seriesHeading__wrapper--details-text");
        this.creators.innerText = "The Duffer Brothers";
        this.creatorsSpan.appendChild(this.creators);
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
        this.heading.classList.add("seriesHeading");
        this.body.appendChild(this.heading);

        const data = await this.data.fetch();

        this.image = document.createElement("img");
        this.image.classList.add("seriesHeading__image");
        this.image.setAttribute("src", data.shows[8].backdrop);
        this.heading.appendChild(this.image);

        this.information = document.createElement("div");
        this.information.classList.add("seriesHeading__information");
        this.heading.appendChild(this.information);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("seriesHeading__information--wrapper");
        this.information.appendChild(this.wrapper);

        this.title = document.createElement("img");
        this.title.classList.add("seriesHeading__information--wrapper-image");
        this.title.setAttribute("src", data.shows[8].titleImage);
        this.wrapper.appendChild(this.title);

        this.details = document.createElement("span");
        this.details.classList.add("seriesHeading__information--wrapper-details");
        this.wrapper.appendChild(this.details);

        this.match = document.createElement("p");
        this.match.classList.add("seriesHeading__information--wrapper-match");
        this.match.innerText = data.shows[8].match + " Match";
        this.details.appendChild(this.match);

        this.year = document.createElement("p");
        this.year.classList.add("seriesHeading__information--wrapper-year");
        this.year.innerText = data.shows[8].year;
        this.details.appendChild(this.year);

        this.age = document.createElement("p");
        this.age.classList.add("seriesHeading__information--wrapper-age");
        this.age.innerText = data.shows[8].age;
        this.details.appendChild(this.age);

        this.duration = document.createElement("p");
        this.duration.classList.add("seriesHeading__information--wrapper-duration");
        this.duration.innerText = data.shows[8].duration + " Seasons";
        this.details.appendChild(this.duration);

        this.description = document.createElement("article");
        this.description.classList.add("seriesHeading__information--description");
        this.information.appendChild(this.description);
        
        this.episodeTitle = document.createElement("h2");
        this.episodeTitle.classList.add("seriesHeading__information--description-title");
        this.episodeTitle.innerText = data.episodes[0].title;
        this.description.appendChild(this.episodeTitle);

        this.episodeDescription = document.createElement("p");
        this.episodeDescription.classList.add("seriesHeading__information--description-text");
        this.episodeDescription.innerText = data.shows[8].description;
        this.description.appendChild(this.episodeDescription);

        this.options = document.createElement("div");
        this.options.classList.add("seriesHeading__options");
        this.information.appendChild(this.options);

        for(let i = 0; i < data.options.length; i++){
            this.optionLink = document.createElement("a");
            this.optionLink.classList.add("seriesHeading__options--link");
            this.optionLink.setAttribute("href", "javascript:void(0)");
            this.options.appendChild(this.optionLink);

            this.optionIcon = document.createElement("i");
            this.optionIcon.classList = data.options[i].class;
            this.optionLink.appendChild(this.optionIcon);

            this.option = document.createElement("p");
            this.option.classList.add("seriesHeading__options--option");
            this.option.innerText = data.options[i].name;
            this.optionLink.appendChild(this.option);
        }
        this.showEpisodes();
    }
    async showEpisodes(){
        const data = await this.data.fetch();
        this.heading = document.querySelector(".seriesHeading");
        this.episodesOption = document.getElementsByClassName("seriesHeading__options--link")[1];
        console.log(this.episodesOption);
        this.episodesOption.onfocus = () => {
            document.querySelector(".seriesHeading__information").remove();
            this.episodes = document.createElement("section");
            this.episodes.classList.add("episodes");
            this.heading.appendChild(this.episodes);

            this.aside = document.createElement("aside");
            this.aside.classList.add("episodes__aside");
            this.episodes.appendChild(this.aside);

            this.wrapper = document.createElement("div");
            this.wrapper.classList.add("episodes__aside--wrapper");
            this.aside.appendChild(this.wrapper);

            this.title = document.createElement("img")
            this.title.classList.add("episodes__aside--wrapper-image");
            this.title.setAttribute("src", data.shows[8].titleImage);
            this.wrapper.appendChild(this.title);

            this.details = document.createElement("span");
            this.details.classList.add("episodes__aside--wrapper-details");
            this.wrapper.appendChild(this.details);

            this.match = document.createElement("p");
            this.match.classList.add("episodes__aside--wrapper-match");
            this.match.innerText = data.shows[8].match + " Match";
            this.details.appendChild(this.match);

            this.year = document.createElement("p");
            this.year.classList.add("episodes__aside--wrapper-year");
            this.year.innerText = data.shows[8].year;
            this.details.appendChild(this.year);

            this.duration = document.createElement("p");
            this.duration.classList.add("episodes__aside--wrapper-duration");
            this.duration.innerText = data.shows[8].duration;
            this.details.appendChild(this.duration);

            this.seasons = document.createElement("div");
            this.seasons.classList.add("episodes__aside--seasons");
            this.aside.appendChild(this.seasons);

            this.seasonAmount = parseInt(data.shows[8].duration) + 1;
            for(let i = 0; i < this.seasonAmount; i++){
                this.season = document.createElement("a");
                this.season.classList.add("episodes__aside--seasons-season");
                this.season.innerText = "Season " + [i];
                this.seasons.appendChild(this.season);
            }

            this.episodesList = document.createElement("div");
            this.episodesList.classList.add("episodes__list");
            this.episodes.appendChild(this.episodesList);
            
            for(let i = 0; i < data.episodes.length; i++){
                this.episodeLink = document.createElement("a");
                this.episodeLink.classList.add("episode")
            }
            
        }
    }
}

//7:17 (19)
//7:33 (19)