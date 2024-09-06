import { Link } from "react-router-dom";
import PlaceHolderImage from "../assets/fstt_next_gen.png";

interface PropType {
    imagePath: string,
    title: string,
    description: string,
    articleLink: string
}

// for safeguard
const DESC_LIMIT = 120;

function truncateText(str: string) {
    return str.length > DESC_LIMIT ? str.substring(0, DESC_LIMIT-3) + '...' : str;
}

function PreviewCard(prop: PropType) {
    const { imagePath, title, description, articleLink } = prop;

    return (
        <div className="preview-card">
            <div className="image-container">
                <img src={PlaceHolderImage} alt={`${title} image`} />
            </div>
            <h3 className="preview-card-title">{truncateText(title)}</h3>
            <p className="preview-card-desc">{truncateText(description)}</p>
            <Link to={articleLink}>View project</Link>
        </div>
    );
}

export default PreviewCard;