class Usp{
    constructor(){
        this.data = new Fetch();
        this.createUsps();
    }
    async createUsps(){
        this.body = document.querySelector("body");
        this.usps = document.createElement("div");
        this.usps.classList.add("usps");
        this.body.appendChild(this.usps);

        const data = await this.data.fetch();
        for(let i = 0; i < data.usps.length; i++){
            this.usp = document.createElement("span");
            this.usp.classList.add("usps__usp");
            this.usps.appendChild(this.usp);

            this.check = document.createElement("i");
            this.check.classList = "fa-solid fa-check usps__usp--icon";
            this.usp.appendChild(this.check);   

            this.text = document.createElement("p");
            this.text.classList.add("usps__usp--text");
            this.text.innerText = data.usps[i].usp;
            this.usp.appendChild(this.text);
        }
    }
}

export default Usp;