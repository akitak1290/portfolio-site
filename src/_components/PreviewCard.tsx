import { Link } from "react-router-dom";
import { truncateText } from "./_util";

interface PropType {
    imagePath: string,
    title: string,
    description: string,
    articleLink: string
}

// for safeguard
const DESC_LIMIT = 120;


function PreviewCard(prop: PropType) {
    const { imagePath, title, description, articleLink } = prop;

    return (
        <div className="preview-card">
            <div className="image-container">
                <img src={new URL(imagePath, import.meta.url).href} alt={`${title} image`} />
            </div>
            <h3 className="preview-card-title">{truncateText(title, DESC_LIMIT)}</h3>
            <p className="preview-card-desc">{truncateText(description, DESC_LIMIT)}</p>
            <span><Link to={articleLink}>View project</Link></span>
        </div>
    );
}

export function PreviewCardPlaceholder() {

    return (
        <div className="preview-card-placeholder">
            <div className="image-container-placeholder placeholder">
                <img src="" alt="" />
            </div>
            <h3 className="preview-card-title-placeholder placeholder"></h3>
            <p className="preview-card-desc-placeholder placeholder"></p>
            <span className="preview-card-link-placeholder placeholder"></span>
        </div>
    );
}

export default PreviewCard;