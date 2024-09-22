import ReactDOM from "react-dom/client";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {DOMAIN} from "./config.js";

import "./index.css";
import "./gallery.css";

//Parse URL for gallery name
//Query the backend and collect info:
//    Gallery number
//    Gallery name
//    Left column list of {src, title} objects
//    Middle column list of {src, title} objects
//    Right column list of {src, title} objects

let imageUrlPrefix = DOMAIN + "/image?src=";

/**
 * Sub-component for displaying a single art piece in the gallery. Props should
 * contain props:
 *    src (image source, string)
 *    title (artwork title, string)
 */
function ArtBlock(props) {
    return <div>
        <img 
            src={imageUrlPrefix + encodeURIComponent(props.src)} 
            style={{maxWidth: "100%", height: "auto"}} 
        />
        <div className="caption">{props.title}</div>
    </div>
}


/**
 * props should contain props:
 *     galleryNumber (roman numeral string)
 *     galleryName (string)
 *     leftColumn (list of {src, title} objects)
 *     centerColumn (list of {src, title} objects)
 *     rightColumn (list of {src, title} objects)
 */
function Main(props) {
    let leftColumn = [];
    let centerColumn = [];
    let rightColumn = [];

    for(let {src, title} of props.leftColumn) {
        leftColumn.push(<ArtBlock src={src} title={title} />);
    }
    for(let {src, title} of props.rightColumn) {
        rightColumn.push(<ArtBlock src={src} title={title} />);
    }
    for(let {src, title} of props.centerColumn) {
        centerColumn.push(<ArtBlock src={src} title={title} />);
    }

    return <div>
        <Header />
        <div className="container centered">
            <div style={{display: "flex"}}>
                <div className="galleryColumn">
                    {leftColumn}
                </div>
                <div className="galleryColumn">
                    <div className="galleryTitle">
                        {"Gallery " + props.galleryNumber}
                    </div>
                    <div className="galleryTitle">
                        {props.galleryName}
                    </div>
                    {centerColumn}
                </div>
                <div className="galleryColumn">
                    {rightColumn}
                </div>
            </div>
        </div>

        <Footer />
    </div>
}

let romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"];

/**
 * Returns the roman numeral representation of [number + 1]
 */
function numberToRoman(number) {
    if(number < 0 || number >= 20) {
        return "";
    }
    return romans[number];
}

const queryParameters = new URLSearchParams(window.location.search);
let galleryNumber = parseInt(queryParameters.get("index"));
if(Number.isNaN(galleryNumber)) galleryNumber = -1;

const root = ReactDOM.createRoot(document.getElementById("root"));
fetch(DOMAIN + "/gallery_data?number=" + galleryNumber).then((response) => {
    return response.json();
}).then((data) => {
    root.render(<Main
        leftColumn={data.left}
        centerColumn={data.center}
        rightColumn={data.right}
        galleryNumber={numberToRoman(galleryNumber)}
        galleryName={data.name}
    />);
})

