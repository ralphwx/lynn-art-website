import "./index.css";
import {DOMAIN} from "./config.js";
import {numberToRoman} from "./gallery_numbers.js";
import {useState, useEffect} from "react";

function Header(props) {
    let [galleryList, setGalleryList] = useState([]);
    console.log(galleryList);
    useEffect(() => {
        fetch(DOMAIN + "/all_galleries").then((response) => {
            return response.json();
        }).then((data) => {
            setGalleryList(data);
        });
    }, []);

    let dropdownDisplay = [];
    for(let i = 0; i < galleryList.length; i++) {
        dropdownDisplay.push(<div className="menu-dropdown">
            <a href={DOMAIN + "/gallery?index=" + i}>
                {"Gallery " + numberToRoman(i) + " " + galleryList[i]}
            </a>
        </div>);
    }

    return <div>
        <div className="container centered header">
            <h1 className="title">Dream Weaver Studio</h1>
            <h1 className="subtitle">FINE ART CREATIONS</h1>
        </div>
    
        <div className="container centered" style={{
            display: "flex", 
            marginBottom: "2rem"}}>
            <div className="menuItem">
                <a href={DOMAIN}>Home</a>
            </div>
            <div className="menuItem">
                <a href={DOMAIN + "/about"}>About</a>
            </div>
            <div className="menuItem">
                <a href={DOMAIN + "/contact"}>Contact</a>
            </div>
            <div className="menuItem">
                <a href={DOMAIN + "/galleries"}>{"Galleries \u25be"}</a>
                {dropdownDisplay}
            </div>
        </div>
    </div>
}

export {Header}
