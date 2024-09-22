import defaultImgSrc from "./images/gray.png";
import {DOMAIN} from "./config.js";

function ImagePromise(props) {
    if(props.src === undefined) {
        throw new Error("ImagePromise requires prop 'src'")
    }

    const [src, setSrc] = useState(props.src);

    useEffect(() => {
        let url = DOMAIN + "/images?src=" + props.src;
        fetch(url).then((response) => {
            return response;
        }).then((data) => {
            setSrc(data);
        });
    }, [props.src]);

    return <img src={src} alt="?" />
}
