class About{
    constructor(){
        this.data = new Fetch();
        this.createAbout();
    }
    async createAbout(){
        this.main = document.querySelector(".main");

        this.about = document.createElement("section");
        this.about.classList.add("about");
        this.main.appendChild(this.about);

        const data = await this.data.fetch();
        for(let i = 0; i < data.about.length; i++){
            this.wrapper = document.createElement("article");
            this.wrapper.classList.add("about__wrapper");
            this.about.appendChild(this.wrapper);

            this.title = document.createElement(data.about[i].tag);
            this.title.classList.add(data.about[i].class);
            this.title.innerText = data.about[i].title;
            this.wrapper.appendChild(this.title);

            this.text = document.createElement("p");
            this.text.classList.add("about__wrapper--text");
            this.text.innerText = data.about[i].text;
            this.wrapper.appendChild(this.text);
        }
    }
}

export default About;