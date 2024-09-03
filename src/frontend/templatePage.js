import ReactDOM from "react-dom/client";
import "./index.css";
import facebookImgSrc from "./images/facebook.png";
import linkedinImgSrc from "./images/linkedin.png";
import googlePlusImgSrc from "./images/googlePlus.png";
import pinterestImgSrc from "./images/pinterest.png";
function Main(props) {
    return <div>
        <div className="container centered header">
            <h1 className="title">Dream Weaver Studio</h1>
            <h1 className="subtitle">FINE ART CREATIONS</h1>
        </div>

        <div className="container centered" style={{display: "flex"}}>
            <div className="menuItem">Home</div>
            <div className="menuItem">About</div>
            <div className="menuItem">Contact</div>
            <div className="menuItem">{"Galleries \u25be"}</div>
            <div className="menuItem hspace"></div>
            <div className="menuItem" style={{color: "red"}}>Contact: 607-342-1533</div>
        </div>

        <div style={{height: "30vh"}}></div>

        <div className="container centered footer">
            <div className="container" style={{display: "flex"}}>
                <div className="footerBlock">
                    <p>Dream Weaver Studio</p>
                    <p>Spencer, NY, USA</p>
                    <p><a href="shopvida.com">shopvida.com</a></p>
                    <p>607-342-1533</p>
                    <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
                        <img className="socialImg" src={facebookImgSrc} />
                        <img className="socialImg" src={googlePlusImgSrc} />
                        <img className="socialImg" src={linkedinImgSrc} />
                        <img className="socialImg" src={pinterestImgSrc} />
                    </div>
                </div>
                <div className="footerBlock">
                    <p>Original artwork is individually priced, with shipping calculated by location.</p>
                    <p>8.5 x 11 unframed prints are priced at $10 plus shipping. Larger are $20 & poster sized prints start at $55 plus shipping.</p>
                    <p>Framed prints are individually priced</p>
                </div>
            </div>

            <div className="copyright">All artwork on this site is protected under US and international copyright law</div>
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
