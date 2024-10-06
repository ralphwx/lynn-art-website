import "./index.css";
import facebookImgSrc from "./images/facebook.png";
import instagramImgSrc from "./images/instagram.png";
import googlePlusImgSrc from "./images/googlePlus.png";
import pinterestImgSrc from "./images/pinterest.png";

function Footer(props) {
    return <div className="container centered footer">
        <div className="container" style={{display: "flex", flexWrap: "wrap"}}>
            <div className="footerBlock">
                <p>Dream Weaver Studio</p>
                <p>Groton, NY, USA</p>
                <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
                    <a href="https://www.facebook.com/lcapaniczebiniak">
                        <img className="socialImg" src={facebookImgSrc} />
                    </a>
                    <a href="https://www.instagram.com/lynn2c">
                        <img className="socialImg" src={instagramImgSrc} />
                    </a>
                    <a href="https://www.pinterest.com/lynn2c">
                        <img className="socialImg" src={pinterestImgSrc} />
                    </a>
                </div>
            </div>
            <div className="footerBlock">
                <p>Original artwork is individually priced, with shipping calculated by location.</p>
                <p>Prints are individually priced</p>
            </div>
        </div>

        <div className="copyright">All artwork on this site is protected under US and international copyright law</div>
    </div>
}

export {Footer}
