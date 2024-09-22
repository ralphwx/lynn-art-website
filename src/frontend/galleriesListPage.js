import ReactDOM from "react-dom/client";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {DOMAIN} from "./config.js";
import {numberToRoman} from "./gallery_numbers.js";
import "./gallery.css";
import "./index.css";

/**
 * Require props to have prop [galleries], which is a list of gallery names
 */
function Main(props) {
    let gallery_listing = [];
    for(let i = 0; i < props.galleries.length; i++) {
        gallery_listing.push(<div className="gallery-listing">
            <a href={DOMAIN + "/gallery?index=" + i}>
                {"Gallery " + numberToRoman(i) + " " + props.galleries[i]}
            </a>
        </div>);
    }
    return <div>
        <Header />
        <div className="container centered">
            {gallery_listing}
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
fetch(DOMAIN + "/all_galleries").then((response) => {
    return response.json();
}).then((data) => {
    root.render(<Main galleries={data} />);
});
