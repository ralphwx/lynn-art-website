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

        <div className="container centered">
            <div style={{
                textAlign: "center", 
                margin: "0 10%", 
                fontFamily: "Alegreya, serif",
                fontSize: "1.2rem",
            }}>
                <h2 style={{color: "red", fontFamily: "Great Vibes, cursive", fontSize: "3rem"}}>
                    About the Artist
                </h2>
        
                <p>
                    Over the past 31 years, this Finger Lakes New York artist has been
                    fulfilling her life's purpose of earth healing by making her art
                    internationally accessible.
                </p>
        
                <p>
                    Since very early childhood, Lynn felt the undeniable desire to share
                    art as her life's purpose. Today, in an effort to make her healing
                    work accessible to everyone to whom it calls, her original art works
                    are also available as archival prints, cards (with text written by
                    the artist), bookmarks, and magnets.
                </p>
        
                <p>
                    An active and vivid dream time is the source for many of her art
                    pieces, and Lynn has be honoured over the years with 16 magazine
                    covers. Her work was published in a book entitled "The Ribbon" (Lark
                    Publishing), as well as in "American Craft Magazine." The Peace
                    Museum in Chicago, Illinois is home to a quilt piece fashioned by
                    the artist, which was inspired by a grassroots effort to promote
                    world peace.
                </p>
        
                <p>
                    A number of her paintings and drawings have found their way to homes
                    and businesses in China, Australia, Japan, and Switzerland, in
                    addition to many areas of the United States. One of Lynn's magazine
                    covers, featuring a piece entitled "The Animus in the 7th Stage of 
                    Initiation," was eventually purchased by the New Jersey magazine.
                    Subsequently, the rights were purchased by a Manhattan company for
                    t-shirts and the like.
                </p>
        
                <p>
                    At her latest Cornell University exhibition, the University
                    graciously purchased one of her pieces for their private collection.
                    In March, 2018, several pieces of her work were selected for exhibit
                    at Manhatten's Stricoff Fine Arts Gallery in Chelsea, which led to a
                    piece being shown in Zurich, Switzerland,as well as Barcelona, Spain. 
                    From the NYC show, a
                    catalog featuring 15 pieces of her artwork was published in Germany,
                    and is available on US Amazon as Art Box Project NYC, under her
                    name. Lynn's work is available in select shops throughout the United
                    States, in addition to
                    accessibility thru Acorn Designs, out of Trumansburg, NY. 
                </p>
        
                <p>
                    Thank you for your interest!
                </p>
        
                <p>
                    Om...
                </p>
            </div>
        </div>

        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
