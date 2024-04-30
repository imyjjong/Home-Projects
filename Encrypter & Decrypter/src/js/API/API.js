class API{
    async getData(url){
        let returnData = {};
        await fetch(url)
        .then(
            (response) => {
                return response.json();
            }
        ).then((data) => {
            returnData = data.data;
        })
        return returnData;
    }
}