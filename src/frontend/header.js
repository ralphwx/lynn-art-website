import "./index.css";

function Header(props) {
    return <div>
        <div className="container centered header">
            <h1 className="title">Dream Weaver Studio</h1>
            <h1 className="subtitle">FINE ART CREATIONS</h1>
        </div>
    
        <div className="container centered" style={{
            display: "flex", 
            marginBottom: "2rem"}}>
            <div className="menuItem">Home</div>
            <div className="menuItem">About</div>
            <div className="menuItem">Contact</div>
            <div className="menuItem">{"Galleries \u25be"}</div>
        </div>
    </div>
}

export {Header}
