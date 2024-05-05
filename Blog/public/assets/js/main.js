class Header{
    constructor(){
        this.createHeader();
    }
    createHeader(){
        this.body = document.querySelector("body");

        this.header = document.createElement("header");
        this.header.classList.add("header");
        this.body.appendChild(this.header);

        this.title = document.createElement("h2");
        this.title.classList.add("header__title");
        this.title.innerText = "blog";
        this.header.appendChild(this.title);
    }
}

class Blog{
    constructor(){
        this.createBlog();
    }
    createBlog(){
        this.body = document.querySelector("body");

        this.main = document.createElement("main");
        this.main.classList.add("main");
        this.body.appendChild(this.main);

        this.blog = document.createElement("section");
        this.blog.classList.add("blog");
        this.main.appendChild(this.blog);

        this.form = document.createElement("form");
        this.form.classList.add("blog__form");
        this.form.setAttribute("id", "postData")
        this.form.setAttribute("action", "getData.php");
        this.blog.appendChild(this.form);

        this.input = document.createElement("input");
        this.input.classList.add("blog__form--input");
        this.input.setAttribute("name", "blog");
        this.form.appendChild(this.input);
        
        this.name = document.createElement("input");
        this.name.classList.add("blog__form--input");
        this.name.setAttribute("name", "name");
        this.form.appendChild(this.name);
        
        this.submit = document.createElement("input");
        this.submit.classList.add("blog__form--submit");
        this.submit.setAttribute("type", "submit");
        this.form.appendChild(this.submit);
    }
}

class App{
    constructor(){
        this.header = new Header();
        this.blog = new Blog();
    }
}

let app = new App();