import { DocumentIcon } from "./_icons";
import AvatarImage from '../assets/ava.jpg';
import Pdf from '../assets/resume.pdf';
import { SectionPropType } from "./_utils";

function Profile(prop: SectionPropType) {
    const { nodeRef } = prop;

    return (
        <div className="profile section" id="profile" ref={nodeRef}>
            <div className="profile-info">
                <h1>Hello,</h1>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient purus donec dictumst vitae massa eget odio fusce. Pellentesque sociosqu congue taciti tincidunt commodo tempor dui.</p>
                <p>Justo lorem leo amet donec at ornare eget. Adipiscing leo eleifend torquent ex tortor rutrum iaculis ornare. Facilisi mi orci facilisis; morbi quis scelerisque sagittis nunc. Nisl parturient volutpat fringilla ultrices fringilla etiam habitasse accumsan. Et eu pellentesque fames fermentum posuere varius rhoncus sagittis orci.</p>
                <span className="resume"><DocumentIcon /><a href={Pdf} target="_blank">See my resume</a></span>
            </div>
            <div className="avatar">
                <img src={AvatarImage} alt="" />
            </div>
        </div>
    );
}

export default Profile;