import ReactDOM from "react-dom/client";
import "./index.css";
import facebookImgSrc from "./images/facebook.png";
import linkedinImgSrc from "./images/linkedin.png";
import googlePlusImgSrc from "./images/googlePlus.png";
import pinterestImgSrc from "./images/pinterest.png";

import {Header} from "./header.js";
import {Footer} from "./footer.js";

function Main(props) {
    return <div>
        <Header />
        <div style={{height: "30vh"}}></div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
