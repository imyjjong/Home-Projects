import Usp from "../Usp/Usp.js";
import Header from "../Header/Header.js";
import Navigation from "../Navigation/Navigation.js";
import Heading from "../Heading/Heading.js";
import BestSellers from "../BestSellers/BestSellers.js";
import Sales from "../Sales/Sales.js";
import Ages from "../Ages/Ages.js";
import Brands from "../Brands/Brands.js";
import Instagram from "../Instagram/Instagram.js";
import About from "../About/About.js";
import Footer from "../Footer/Footer.js";

class App{
    constructor(){
        this.usp = new Usp();   
        this.header = new Header();
        this.navigation = new Navigation();
        this.heading = new Heading();
        this.bestsellers = new BestSellers();
        this.sales = new Sales();
        this.ages = new Ages();
        this.brands = new Brands();
        this.instagram = new Instagram();
        this.about = new About();
        this.footer = new Footer();
    }
}

export default App;