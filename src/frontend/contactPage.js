import ReactDOM from "react-dom/client";

import "./index.css";
import "./contact.css";

import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {DOMAIN} from "./config.js";

let artistImgSrc = DOMAIN + "/images/artist.jpg";

function Main(props) {
    return <div>
        <Header />

        <div className="container centered">
            <div style={{margin: "0 15%", borderBottom: "2px dotted white"}}>
                <div className="centered" style={{display: "flex", justifyContent: "center"}}>
                    <img src={artistImgSrc} style={{
                        height: "40svh",
                        width: "auto",
                    }}/>
                </div>
                <div style={{
                    fontFamily: "Great Vibes, serif",
                    fontSize: "3rem",
                    color: "red",
                    textAlign: "center",
                    margin: "1rem 0",
                }}>
                    Contact the Artist
                </div>
            </div>
        </div>

        <div className="container centered">
            <div style={{
                display: "flex", 
                justifyContent: "center", 
                padding: "30px",
                flexWrap: "wrap",
            }}>
                <div className="infoBox" style={{flex: 1, textAlign: "center", minWidth: "min(400px, 100%)"}}>
                    <h1>Feel free to contact the artist at her email below!</h1>
                    <h2>Location</h2>
                    <p>Groton, NY, USA</p>
                    <br/>
                    <h2>Email</h2>
                    <p>starspiritart@gmail.com</p>
                    <br/>
                    <h2>Facebook</h2>
                    <p>Dream Weaver Art Studio</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
