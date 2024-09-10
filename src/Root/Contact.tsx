import { GithubIcon, LinkedinIcon, TwitterIcon } from "./_icons";
import { SectionPropType } from "./_utils";

function Contact(prop: SectionPropType) {
    const { nodeRef } = prop;

    return (
        <div className="contact section" id="contact" ref={nodeRef}>
            <h1>Contact.</h1>
            <div className="contact-info">
                <p>Feel free to leave me a message if you want to talk.</p>
                <span>
                    <a className="email" href="mailto:anhkien1209@gmail.com">anhkien1209@gmail.com</a>
                </span>
                <div className="socials">
                    <span><a href="https://github.com/akitak1290" target="_blank"><GithubIcon /> anhkien1209</a></span>
                    <span><a href="https://www.linkedin.com/in/anh-kien-nguyen/" target="_blank"><LinkedinIcon /> anh-kien-nguyen</a></span>
                    <span><a href="https://x.com/" target="_blank"><TwitterIcon /> kienNg</a></span>
                </div>
            </div>
        </div>
    );
}

export default Contact;