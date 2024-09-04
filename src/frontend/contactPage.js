import ReactDOM from "react-dom/client";

import "./index.css";

import {Header} from "./header.js";
import {Footer} from "./footer.js";

import artistImgSrc from "./images/artist.jpg";

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
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{width: "300px", height: "500px", border: "1px dotted green"}}></div>
                <div style={{width: "300px", height: "500px", border: "1px dotted red"}}></div>
            </div>
        </div>

        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
