import ReactDOM from "react-dom/client";
import {useState, useEffect} from "react";

import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {DOMAIN} from "./config.js";
import {numberToRoman} from "./gallery_numbers.js";

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
            style={{width: "100%", height: "auto"}} 
        />
        <div className="caption">{props.title}</div>
    </div>
}

function GalleryDesktop(props) {
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

function GalleryMobile(props) {
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
            <div style={{padding: "0 10%"}}>
                <div className="galleryTitle">
                    {"Gallery " + props.galleryNumber}
                </div>
                <div className="galleryTitle">
                    {props.galleryName}
                </div>
                <div className="galleryColumn">
                    {leftColumn}
                </div>
                <div className="galleryColumn">
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

/**
 * props should contain props:
 *     galleryNumber (roman numeral string)
 *     galleryName (string)
 *     leftColumn (list of {src, title} objects)
 *     centerColumn (list of {src, title} objects)
 *     rightColumn (list of {src, title} objects)
 */
function Main(props) {
    let threshold = 742;
    let [isDesktop, setIsDesktop] = useState(window.innerWidth > threshold);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > threshold);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isDesktop ? <GalleryDesktop {...props} /> 
      : <GalleryMobile {...props} />;
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

