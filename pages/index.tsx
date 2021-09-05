import { useState } from "react";
import Image from 'next/image';
import CloseMenu from '../public/img/close-menu.svg';
import BurgerMenu from '../public/img/burger-menu.svg';
import HomeImg from '../public/img/Home image.png';
import Logo from '../public/img/Logo.png';
import Rectangle from '../public/img/Rectangle 1.jpg';

import Partner from "./components/partner";
import Qa from "./components/qa";
import Tariff from "./components/tariff";


function Index() {
    
const [navClosed, setNavState] = useState(true);

const hideNav = () => {
    setNavState(true);
    document.querySelector('body')?.classList.remove("no-scroll");
}

const showHideNav = () => {
    setNavState(!navClosed);
    document.querySelector('body')?.classList.toggle("no-scroll");
}

let partners = [];
for (let i = 1; i < 7; i++) {
    partners.push(<Partner 
    img={Rectangle} 
    name={"Partner " + i.toString()} 
    href={"www.partner" + i.toString() + ".com"}
    key={i}
    />)
}

console.log(partners[0]);

return (

    <div id="landing-container">

    <header id="landing-header">

    <div id="logo">
        <Image src={Logo} alt="DelivAir" height={60} />
    </div>

        <nav className={navClosed ? "closed" : ""} id="landing-nav">

        
        <div className="content">
            <a href="#partners" onClick={hideNav}>OUR PARTNERS</a>
            <a href="#tariffs" onClick={hideNav}>TARIFFS</a>
            <a href="#q_a" onClick={hideNav}>Q&A</a>
            <a href="#header" onClick={hideNav}>HOME</a>
            <a href="#contact-us" className="blue-button" onClick={hideNav}>GET IT NOW</a>
            <button className="mobile-navbar-button-container" onClick={showHideNav} >
            <Image src={CloseMenu} unoptimized={true} alt="Close" id="mobile-navbar-close-button" className="mobile-navbar-button"/>
            </button>
            
        </div>

        </nav>

        <button className="mobile-navbar-button-container" onClick={showHideNav} >
        <Image src={BurgerMenu} alt="Menu" id="mobile-navbar-open-button" className="mobile-navbar-button" />
        </button>


    </header>

    <section id="home">

        <h1>
        Get your order faster then ever before With our drones!
        </h1>
        <Image src={HomeImg} alt="Drone" />
        <span id="details">DETAILS</span>

    </section>

    <section id="q_a">

        <Qa heading="How can we do this?" text="Using drones we can deliver
             small packages (less then 15 kg) through air.
            Using this transport rout we avoid overloaded ground routs, 
            which means your package will be delivered as fast as it is possible." 
        />

        <Qa heading="How fast?" text="Our drons can fligth at a speed of 120 km/h! 
            In additional they don`t have to stop at traffic lights or to skip pedestrians. 
            So, according to our expirience, you will get you package less then 
            20 minutes after ordering." 
        />

        <Qa heading="How fast?" text="Drones become more and more cheap. Even big drones, that are
            necessary to carry packages, cost not much. Due to this using drones as currier even
            cheaper than using human." 
        />


    </section>

    <section id="tariffs">

        <h2 className="sub-heading">Our tariffs</h2>
        <div className="content">

            <Tariff price="0.00" heading="Partner program" 
                text="You can get delivery absolutly for free buying products from our partners."
                href="#partners"
            />

            <Tariff price="0.99" heading="Light package" 
                text="You can get delivery of every package which has weight less than 5 kg.
                *By preliminary agreement."
                href="#contact-us"
            />

            <Tariff price="1.99" heading="Heavy package" 
                text="You can get delivery of every package which has weight up to 15 kg. 
                *By preliminary agreement."
                href="#contact-us"
            />

        </div>

    </section>

    <section id="contact-us">

        <h2 className="sub-heading">Contact us</h2>

        <p>
        To agree about delivery of your<br/>
        own package
        </p>

        <form action="post">

        <input type="text" name="name" placeholder="Name" />

        <input type="tel" name="phone" placeholder="Phone" />

        <input type="email" name="email" placeholder="Email" />

        <div className="select-container">

            <select name="tariff">
            <option>Choose your tariff</option>
            <option value="1">Light package</option>
            <option value="2">Heavy package</option>
            </select>

        </div>

        <textarea name="commentary" cols={30} rows={3} placeholder="Commentary"></textarea>

        <button type="submit" className="blue-button">SUBMIT</button>

        </form>

    </section>

    <section id="partners">
        
        <h2 className="sub-heading">Our partners</h2>

        <div className="content">

        { partners }

        </div>

    </section>
    </div>
    
);
}

export default Index;