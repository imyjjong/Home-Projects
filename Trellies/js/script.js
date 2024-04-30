fetch("data/trellies.json").then(
    function(response){
        return response.json();
    }
).then(
    function(data){
        for(let i = 0; i < data.trellies.length; i++){
            addSection(data.trellies[i]);
        }
    }
)

function addSection(data){
        const main = document.querySelector("main");
        let toBeAddedSection = document.createElement("section");
        toBeAddedSection.classList.add("tasks");
        main.appendChild(toBeAddedSection);
        
        let toBeAddedHeader = document.createElement("header");
        toBeAddedHeader.classList.add("tasks__header");
        toBeAddedSection.appendChild(toBeAddedHeader);

        let toBeAddedH2 = document.createElement("h2");
        toBeAddedH2.classList.add("tasks__header--h2");
        toBeAddedHeader.appendChild(toBeAddedH2);
        toBeAddedH2.innerText = data.title;

        let toBeAddedWrapper = document.createElement("div");
        toBeAddedWrapper.classList.add("tasks__headerWrapper");
        toBeAddedHeader.appendChild(toBeAddedWrapper);

        let toBeAddedNumber = document.createElement("div");
        toBeAddedNumber.classList.add("tasks__headerWrapper--number");
        toBeAddedWrapper.appendChild(toBeAddedNumber);
        toBeAddedNumber.innerText = data.activities.length;
        
        let toBeAddedEdit = document.createElement("button");
        toBeAddedEdit.classList.add("tasks__headerWrapper--edit");
        toBeAddedEdit.onclick = function(){
            addCard();
        }
        toBeAddedWrapper.appendChild(toBeAddedEdit);
        toBeAddedEdit.innerText = data.edit;

        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__list");
        toBeAddedSection.appendChild(toBeAddedUl);
        for(let i = 0; i < data.activities.length; i++){
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi);
            let toBeAddedLabel = document.createElement("div");
            toBeAddedLabel.classList.add("tasks__listItem--label");
            toBeAddedLi.appendChild(toBeAddedLabel);
            toBeAddedLabel.innerText = data.activities[i].label;
            let toBeAddedP = document.createElement("p");
            toBeAddedLi.appendChild(toBeAddedP);
            toBeAddedP.innerText = data.activities[i].description;
            let toBeAddedFigure = document.createElement("figure");
            toBeAddedFigure.classList.add("tasks__listItem--figure");
            toBeAddedLi.appendChild(toBeAddedFigure);
            let toBeAddedInitials = document.createElement("h2");
            toBeAddedInitials.classList.add("tasks__listItem--figureInitials");
            toBeAddedInitials.innerText = data.activities[i].initials;
            toBeAddedFigure.appendChild(toBeAddedInitials);
            let toBeAddedImage = document.createElement("img");
            toBeAddedImage.classList.add("tasks__listItem--figureImage");
            toBeAddedImage.src = data.activities[i].imgPath;
            toBeAddedImage.setAttribute("title", data.activities[i].name);
            toBeAddedFigure.appendChild(toBeAddedImage);
    }
}

async function addCard(){
    const editButton = document.getElementsByClassName("tasks__headerWrapper--edit");
    let addingCard = false;
    for(let i = 0; i < editButton.length; i++){
        editButton[i].onclick = function(){
            if(addingCard === false){
                let toBeAddedCard = document.createElement("ul");
                toBeAddedCard.classList.add("tasks__listItem");
                toBeAddedCard.setAttribute("id", "js--form");
                let parent = this.closest(".tasks");
                let tasksList = parent.querySelector(".tasks__list");
                tasksList.appendChild(toBeAddedCard);
    
                let toBeAddedForm = document.createElement("form");
                toBeAddedForm.classList.add("tasksForm");
                toBeAddedForm.setAttribute("action", "data/trellies.json");
                toBeAddedCard.appendChild(toBeAddedForm);
    
                let toBeAddedInput = document.createElement("input");
                toBeAddedInput.classList.add("tasksForm__input");
                toBeAddedInput.setAttribute("type", "text");
                toBeAddedInput.setAttribute("name", "information");
                toBeAddedForm.appendChild(toBeAddedInput);
    
                let toBeAddedSubmit = document.createElement("input");
                toBeAddedSubmit.classList.add("tasksForm__submit");
                toBeAddedSubmit.setAttribute("type", "submit");
                toBeAddedInput.setAttribute("name", "submit");
                toBeAddedForm.appendChild(toBeAddedSubmit);
                
                const trellieForm = document.getElementById("js--form");
                trellieForm.addEventListener("submit", (event) => {
                    FormToJSON(event);
                });
                addingCard = true;
            }
            else{
                const form = document.getElementById("js--form");
                form.remove();
                addingCard = false;
                
            }
        }
    }
}

function formToDictionary(form){
    const data = new FormData(form);
    let formKeyValue = {};
    for(const [name, value] of data){
        formKeyValue[name] = value;
    }
    return formKeyValue;
};

function FormToJSON(event){
    event.preventDefault();
    let form = event.target;
    let jsonForm = formToDictionary(form);
    console.log(jsonForm);
    
    let options = 
    {
        method: "POST",
        cache: "no-cache",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(jsonForm)
    };

    let toBeAddedLi = document.createElement("li");
    toBeAddedLi.classList.add("tasks__listItem");
    let parent = document.querySelector("ul").closest(".tasks");
    let tasksList = parent.querySelector(".tasks__list");
    tasksList.appendChild(toBeAddedLi);
    let toBeAddedLabel = document.createElement("div");
    toBeAddedLabel.classList.add("tasks__listItem--label");
    toBeAddedLi.appendChild(toBeAddedLabel);
    let toBeAddedP = document.createElement("p");
    toBeAddedLi.appendChild(toBeAddedP);
    toBeAddedP.innerHTML = JSON.stringify(jsonForm);
}