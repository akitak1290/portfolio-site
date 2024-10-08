import { DocumentIcon } from "./_icons";
import Pdf from '../assets/resume.pdf';
import { SectionPropType } from "./_utils";

function Profile(prop: SectionPropType) {
    const { nodeRef } = prop;

    return (
        <div className="profile section" id="profile" ref={nodeRef}>
            <div className="profile-info">
                <h1>Hi,</h1>
                <p>I'm a software developer with expertise in web technology and a genuine interest in understanding the inner workings of computer systems.</p>
                <p>Most recently, I attempted to build a tree-walk interpreter for a dynamically typed, general-purpose language with partial OOP support.</p>
                <p>Most of my personal time is spend exploring and doing street photography with my ol' trusty instant camera.</p>
                <p></p>
                <span className="resume"><DocumentIcon /><a href={Pdf} target="_blank">See my resume</a></span>
            </div>
            <div className="avatar">
                {/* https://github.com/facebook/react/issues/28948 wait for React 19 for a fix */}
                <img src="/ava_bg.webp" alt="" />
                <img src="/ava.webp" srcSet="ava_small.webp 300w" alt="avatar" />
            </div>
        </div>
    );
}

export default Profile;