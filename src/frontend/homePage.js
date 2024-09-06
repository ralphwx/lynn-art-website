
import ReactDOM from "react-dom/client";

import {Header} from "./header.js";
import {Footer} from "./footer.js";
import "./index.css";
import "./home.css";

import demeterImgSrc from "./images/demeter.png";
import artistImgSrc from "./images/artist.jpg";

function Main(props) {
    return <div>
        <Header />
        <div className="container centered" style={{display: "flex", gap: "10px", marginBottom: "1rem"}}>
            <div className="sop-box" style={{flex: 2}}>
                <div className="home-image-box">
                    <img src={demeterImgSrc} style={{width: "100%", height: "auto"}}/>
                    <div style={{textAlign: "center"}}>{"Demeter \u00a9 L Capani-Czebiniak"}</div>
                </div>
                <h1 style={{fontSize: "3.2rem", fontFamily: "Great Vibes", textAlign: "center"}}>
                    Lynn Capani-Czebiniak
                </h1>
                <h2 style={{fontSize: "2rem", fontFamily: "Great Vibes, serif", textAlign: "center", color: "red"}}>Statement of Purpose</h2>
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
                    <p>lynn2c@htva.net</p>
                </div>
            </div>
            <div className="sidebar">
                <div>
                    <h2 style={{
                        fontSize: "2rem", 
                        fontFamily: "Great Vibes, serif",
                        color: "red",
                        textAlign: "center",
                    }}>
                        The Invitation
                    </h2>
                    <p>
                        Welcome to a space graced with haunting images in
                        ethereal colors that heal the wounds of the soul. 
                        Namaste.
                    </p>
                    <img src={artistImgSrc} style={{width: "100%", height: "auto"}}/>
                </div>
                <div>
                    <h2 style={{fontSize: "1.5rem", fontFamily: "Oswald", color: "red", textAlign: "center"}}>
                        Events & Exhibitions
                    </h2>
                    <p>
                        Updated events here
                    </p>
                </div>
                <div>
                    <h2 style={{fontSize: "1.5rem", fontFamily: "Oswald", color: "red", textAlign: "center"}}>
                        Ongoing Exhibits
                    </h2>
                    <p>Gallery 41, Lake Street</p>
                    <p>Owego, NY 13850</p>
                    <p>&</p>
                    <p>The Mad Hatter Cafe & Co-Op</p>
                    <p>Athens, PA 18840</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
