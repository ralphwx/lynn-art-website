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
