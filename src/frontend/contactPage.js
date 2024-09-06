import ReactDOM from "react-dom/client";

import "./index.css";
import "./contact.css";

import {Header} from "./header.js";
import {Footer} from "./footer.js";

import artistImgSrc from "./images/artist.jpg";

function sendMessage() {
    console.log("Attempt to send message");
}

function Main(props) {
    return <div>
        <Header />

        <div className="container centered">
            <div style={{margin: "0 15%", borderBottom: "2px dotted white"}}>
                <img src={artistImgSrc} style={{
                    width: "70%", 
                    height: "auto",
                    marginLeft: "15%",
                }}/>
                <p style={{
                    fontFamily: "Great Vibes, serif",
                    fontSize: "3rem",
                    color: "red",
                    textAlign: "center",
                }}>
                    Contact the Artist
                </p>
            </div>
        </div>

        <div className="container centered">
            <div style={{display: "flex", justifyContent: "center", padding: "30px"}}>
                <div style={{flex: 1}}>
                    <h2>CONTACT FORM</h2>
                    <p style={{fontSize: "1.2rem"}}>
                        Please feel free to contact the artist by filling in the
                        information below. Thank you!
                    </p>
                    <div className="formContainer">
                        <input 
                            type="text" 
                            placeHolder="Name" 
                            id="name-input" 
                        />
                        <input 
                            type="text" 
                            placeHolder="Email" 
                            id="email-input" 
                        />
                        <input 
                            type="text" 
                            placeHolder="Phone number" 
                            id="phone-input" 
                        />
                        <input 
                            type="text" 
                            placeHolder="Subject" 
                            id="subject-input" 
                        />
                        <textarea placeHolder="Message" id="message-input" />
                        <button onClick={sendMessage}>Send!</button>
                    </div>
                </div>
                <div className="infoBox" style={{flex: 1, textAlign: "center"}}>
                    <h2>Location</h2>
                    <p>Spencer, NY, USA</p>
                    <br/>
                    <h2>Email</h2>
                    <p>starspiritart@gmail.com</p>
                    <br/>
                    <h2>ShopVida</h2>
                    <p>Lynn2c at <a>shopvida.com</a></p>
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
