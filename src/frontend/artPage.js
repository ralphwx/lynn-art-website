import ReactDOM from "react-dom/client";
import {Header} from "./header.js";
import {Footer} from "./footer.js";

import garfieldImgSrc from "./images/garfield.webp";
import odieImgSrc from "./images/odie.webp";
import jonImgSrc from "./images/jon.webp";
import nermalImgSrc from "./images/nermal.webp";
import arleneImgSrc from "./images/arlene.webp";
import lymanImgSrc from "./images/lyman.webp";

import "./index.css";
import "./gallery.css";

//Parse URL for gallery name
//Query the backend and collect info:
//    Gallery number
//    Gallery name
//    Left column list of {src, title} objects
//    Middle column list of {src, title} objects
//    Right column list of {src, title} objects

/**
 * Sub-component for displaying a single art piece in the gallery. Props should
 * contain props:
 *    src (image source, string)
 *    title (artwork title, string)
 */
function ArtBlock(props) {
    return <div>
        <img src={props.src} style={{maxWidth: "100%", height: "auto"}} />
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

let leftColumn = [
    {
        src: garfieldImgSrc,
        title: "Garfield",
    },
    {
        src: arleneImgSrc,
        title: "Arlene",
    }
];
let centerColumn = [
    {
        src: jonImgSrc,
        title: "Jon",
    },
    {
        src: lymanImgSrc,
        title: "Lyman",
    }
];
let rightColumn = [
    {
        src: odieImgSrc,
        title: "Odie",
    },
    {
        src: nermalImgSrc,
        title: "Nermal",
    }
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main leftColumn={leftColumn} rightColumn={rightColumn} centerColumn={centerColumn} galleryNumber={"I"} galleryName={"Garfield and Friends"} />);
