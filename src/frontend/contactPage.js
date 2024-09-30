import ReactDOM from "react-dom/client";

import "./index.css";
import "./contact.css";

import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {DOMAIN} from "./config.js";

import artistImgSrc from "./images/artist.jpg";

function isValidEmail(email) {
    let at_index = email.indexOf("@");
    if(at_index === -1) return false;
    if(email.indexOf("@", at_index + 1) !== -1) return false;
    if(email.indexOf(".", at_index + 1) === -1) return false;
    if(email[email.length - 1] === ".") return false;
    return true;
}

function sendMessage() {
    let name_input = document.getElementById("name-input")
    let email_input = document.getElementById("email-input")
    let phone_input = document.getElementById("phone-input")
    let subject_input = document.getElementById("subject-input")
    let message_input = document.getElementById("message-input")

    let name = name_input.value;
    let email = email_input.value;
    let phone = phone_input.value;
    let subject = subject_input.value;
    let message = message_input.value;

    if(name === "") name = "Anonymous";
    if(!isValidEmail(email)) {
        alert("Invalid email detected");
        return;
    }
    if(message === "") {
        alert("Message cannot be empty");
        return;
    }

    name_input.value = "";
    email_input.value = "";
    phone_input.value = "";
    subject_input.value = "";
    message_input.value = "";

    fetch(DOMAIN + "/message", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            phone_number: phone,
            subject: subject,
            message: message,
        }),
        headers: {
            "Content-type": "application/json",
        }
    }).then((response) => {
        alert("Message sent!");
    }).catch((err) => {
        alert("Failed to connect, please try again later.");
    });
}

function Main(props) {
    return <div>
        <Header />

        <div className="container centered">
            <div style={{margin: "0 15%", borderBottom: "2px dotted white"}}>
                <div className="centered" style={{display: "flex", justifyContent: "center"}}>
                    <img src={artistImgSrc} style={{
                        height: "50dvh",
                        width: "auto",
                    }}/>
                </div>
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
                    <p>Grotin, NY, USA</p>
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
