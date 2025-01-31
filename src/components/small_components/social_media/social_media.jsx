import "./social_media.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialMedia = () => {
    return (
        <ul className="social-media-list">
            <li><a href=""><FontAwesomeIcon icon={["fab", "facebook"]}/></a></li>
            <li><a href=""><FontAwesomeIcon icon={["fab", "instagram"]}/></a></li>
            <li><a href=""><FontAwesomeIcon icon={["fab", "youtube"]}/></a></li>
        </ul>
    )
}

export default SocialMedia