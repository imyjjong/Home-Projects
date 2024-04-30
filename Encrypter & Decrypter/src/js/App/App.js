class App{
    constructor(){
        this.decrypter = new Decrypter();
        this.encrypter = new Encrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        this.api.getData("src/data/data.json").then( (data) => {
            this.main = new Main(data, this);
        });
    }
    encrypt = (cipherText) => {
        const encrypted = this.encrypter.encrypt(cipherText);
        this.main.changeEncrypter(encrypted);
    }
    decrypt = (cipherText) => {
        const decrypted = this.decrypter.decrypt(cipherText);
        this.main.changeDecrypter(decrypted);
    }
}