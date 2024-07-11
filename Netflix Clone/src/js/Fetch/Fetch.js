class Fetch{
    constructor(){
        this.fetch().then(data => {

        });
    }
    async fetch(){
        return fetch("src/data/data.json")
        .then(
            function(response){
                return response.json();
            }
        )
    }
}