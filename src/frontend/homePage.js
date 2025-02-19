
import ReactDOM from "react-dom/client";
import {useState, useEffect} from "react";

import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {DOMAIN} from "./config.js";
import "./index.css";
import "./home.css";

import {EVENTS} from "./events.js";

let demeterImgSrc = DOMAIN + "/images/demeter.png";
let artistImgSrc = DOMAIN + "/images/artist.jpg";

function Main(props) {
    return <div>
        <Header />
        <div className="container centered" 
            style={{display: "flex", gap: "10px", marginBottom: "1rem", flexWrap: "wrap"}}
        >
            <div className="sop-box">
                <div className="home-image-box">
                    <img className="wide-img" src={demeterImgSrc} />
                    <div style={{textAlign: "center"}}>
                        {"Demeter \u00a9 L Capani-Czebiniak"}
                    </div>
                </div>
                <h1>
                    Lynn Capani-Czebiniak
                </h1>
                <h2>Statement of Purpose</h2>
                <p>
                    In an effort to aid in the healing of the wounded planet, 
                    this Finger Lakes New York artist gently weaves dreams,
                    myths, and emotions into haunting images that speak the
                    universal language of the spirit. First Nation's Wisdom,
                    Goddess lore and mystic dreams are the palette from which
                    she draws inspiration, transforming the ordinary into 
                    magical journeys of the soul.
                </p>
                <p>
                    With pencil, pastel, acrylic, and water color, Lynn 
                    Capani-Czebiniak calls up the spirits of lost memories and
                    the ghosts of childhood's dreams, beckoning the viewer into
                    communion with the Universe. Enter her dream world and
                    embark on a sojourn into a space of healing energy.
                </p>
                <br/>
                <div style={{textAlign: "center"}}>
                    <p>starspiritart@gmail.com</p>
                </div>
            </div>
            <div className="sidebar">
                <div>
                    <h2>
                        The Invitation
                    </h2>
                    <p>
                        Welcome to a space graced with haunting images in
                        ethereal colors that heal the wounds of the soul. 
                        Namaste.
                    </p>
                    <img src={artistImgSrc} style={{width: "80%", height: "auto", marginLeft: "10%", marginBottom: "1rem"}}/>
                </div>
                <div>
                    <h2>
                        Events & Exhibitions
                    </h2>
                    {EVENTS}
                </div>
                <div>
                    <h2>
                        My book
                    </h2>
                    <p style={{
                        textAlign: "center", 
                        color: "red", 
                        fontSize: "1.35rem",
                    }}>
                        <i>Moon's breath and Magick</i>
                    </p>
                    <p>
                        Within a semiautobiographical presentation, Lynn shares
                        original goddess creations accompanied by explanations
                        and details of her own intimate experiences with each
                        goddess, including Abuk, Morpheus, Gaia, Kwan Yin,
                        Mare-Mayde, and many more.
                    </p>
                    <p><a href="https://a.co/d/gkytfKf">
                        Find the book here!
                    </a></p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
