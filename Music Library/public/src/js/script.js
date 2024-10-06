const playbar = document.getElementById("js--playbar");
const getAudio = document.getElementsByClassName("audioForm");

for(let i = 0; i < getAudio.length; i++){
    getAudio[i].addEventListener("submit", (event) =>{
        event.preventDefault();
        toPhpWithGet(event);
    });
    
}
function toPhpWithGet(event){
    let form = event.target;
    const data = new FormData(form);

    let url = "components/playaudio.php?audio="+data.get("audio");
    fetch(url)
    .then((response)=>{
        playbar.setAttribute("src", data.get("audio"));
    });
};

