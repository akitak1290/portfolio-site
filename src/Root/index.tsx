import { Link } from 'react-router-dom';
import GithubCard from '../_components/GithubCard';
import Pdf from '../assets/resume.pdf';
import PreviewCard from '../_components/PreviewCard';

function Root() {
    return (
        <div className="main">
            <Profile />
            <Experience />
            <Projects />
            <Blog />
            <Contact />
        </div>
    );
}

function Profile() {
    return (
        <div className="profile">
            <h1>Hello,</h1>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient purus donec dictumst vitae massa eget odio fusce. Pellentesque sociosqu congue taciti tincidunt commodo tempor dui.</p>
            <p>Justo lorem leo amet donec at ornare eget. Adipiscing leo eleifend torquent ex tortor rutrum iaculis ornare. Facilisi mi orci facilisis; morbi quis scelerisque sagittis nunc. Nisl parturient volutpat fringilla ultrices fringilla etiam habitasse accumsan. Et eu pellentesque fames fermentum posuere varius rhoncus sagittis orci.</p>
            <a className="resume" href={Pdf}> <DocumentIcon /> See my resume</a>
        </div>
    );
}

function Experience() {
    return (
        <div className="experience">
            <h1>Experience.</h1>
            <p>Nec lobortis suspendisse magna convallis turpis metus natoque facilisi ornare. Sollicitudin conubia in scelerisque suspendisse congue ad platea torquent.</p>
            {[0, 1].map(_ => {
                return (
                    <PreviewCard
                        title='Justo lorem leo amet donec at ornare'
                        imagePath='../assets/fstt_next_gen.png'
                        description='Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient purus donec dictumst vitae massa eget odio fusce.'
                        articleLink='/'/>
                );
            })}
        </div>
    );
}

function Projects() {
    return (
        <div className="projects">
            <h1>Projects.</h1>
            <p>Nec lobortis suspendisse magna convallis turpis metus natoque facilisi ornare. Sollicitudin conubia in scelerisque suspendisse congue ad platea torquent.</p>
            {[0, 1, 2, 3].map(_ => {
                return (
                    <GithubCard
                        repoName='lobortis suspendisse'
                        repoDescription='Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient purus donec dictumst vitae massa eget odio fusce. '
                        languageType='Tempor'
                        linkToRepo='http://localhost:5173/'
                    />
                );
            })}
        </div>
    );
}

function Blog() {
    return (
        <div className="blog">
            <h1>Blog.</h1>
            {[0].map((_, i) => {
                return (
                    <div className='blog-post'>
                        <p>Sep 12, 2024</p>
                        <Link to={`blog/${i}`}>A collection of interesting articles, books, and others.</Link>
                    </div>
                );
            })}
        </div>
    );
}

function Contact() {
    return (
        <div className="contact">
            <h1>Contact.</h1>
            <p>Feel free to leave me a message if you want to talk.</p>
            <span>
                <a className="email" href="mailto:anhkien1209@gmail.com">anhkien1209@gmail.com</a>
            </span>
            <div className="socials">
                <a href="https://github.com/akitak1290" target="_blank"><GithubIcon /> anhkien1209</a>
                <a href="https://www.linkedin.com/in/anh-kien-nguyen/" target="_blank"><LinkedinIcon /> anh-kien-nguyen</a>
                <a href="https://x.com/" target="_blank"><TwitterIcon /> kienNg</a>
            </div>
        </div>
    );
}

function DocumentIcon() {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13V9C1 5.229 1 3.343 2.172 2.172C3.344 1.001 5.229 1 9 1H11C14.771 1 16.657 1 17.828 2.172C18.482 2.825 18.771 3.7 18.898 5M19 9V13C19 16.771 19 18.657 17.828 19.828C16.656 20.999 14.771 21 11 21H9C5.229 21 3.343 21 2.172 19.828C1.518 19.175 1.229 18.3 1.102 17M6 13H11M6 9H7M14 9H10" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0C6.51509 0 5.53982 0.19881 4.62987 0.585077C3.71993 0.971345 2.89314 1.53751 2.1967 2.25124C0.790176 3.69268 0 5.6477 0 7.6862C0 11.0835 2.1525 13.9658 5.13 14.9881C5.505 15.0496 5.625 14.8113 5.625 14.6038V13.3048C3.5475 13.766 3.105 12.2749 3.105 12.2749C2.76 11.3833 2.2725 11.145 2.2725 11.145C1.59 10.6684 2.325 10.6838 2.325 10.6838C3.075 10.7376 3.4725 11.4755 3.4725 11.4755C4.125 12.6438 5.2275 12.2979 5.655 12.1135C5.7225 11.6139 5.9175 11.2757 6.1275 11.0835C4.4625 10.8913 2.715 10.2303 2.715 7.30189C2.715 6.44872 3 5.76465 3.4875 5.21893C3.4125 5.02678 3.15 4.22741 3.5625 3.18977C3.5625 3.18977 4.1925 2.98225 5.625 3.97377C6.2175 3.80467 6.8625 3.72012 7.5 3.72012C8.1375 3.72012 8.7825 3.80467 9.375 3.97377C10.8075 2.98225 11.4375 3.18977 11.4375 3.18977C11.85 4.22741 11.5875 5.02678 11.5125 5.21893C12 5.76465 12.285 6.44872 12.285 7.30189C12.285 10.238 10.53 10.8837 8.8575 11.0758C9.1275 11.3141 9.375 11.7829 9.375 12.4978V14.6038C9.375 14.8113 9.495 15.0573 9.8775 14.9881C12.855 13.9581 15 11.0835 15 7.6862C15 6.67684 14.806 5.67735 14.4291 4.74482C14.0522 3.81229 13.4997 2.96497 12.8033 2.25124C12.1069 1.53751 11.2801 0.971345 10.3701 0.585077C9.46018 0.19881 8.48491 0 7.5 0Z" fill="black" />
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 0C13.7754 0 14.1993 0.175595 14.5118 0.488155C14.8244 0.800716 15 1.22464 15 1.66667V13.3333C15 13.7754 14.8244 14.1993 14.5118 14.5118C14.1993 14.8244 13.7754 15 13.3333 15H1.66667C1.22464 15 0.800716 14.8244 0.488155 14.5118C0.175595 14.1993 0 13.7754 0 13.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H13.3333ZM12.9167 12.9167V8.5C12.9167 7.77949 12.6304 7.0885 12.121 6.57903C11.6115 6.06955 10.9205 5.78333 10.2 5.78333C9.49167 5.78333 8.66667 6.21667 8.26667 6.86667V5.94167H5.94167V12.9167H8.26667V8.80833C8.26667 8.16667 8.78333 7.64167 9.425 7.64167C9.73442 7.64167 10.0312 7.76458 10.25 7.98338C10.4688 8.20217 10.5917 8.49891 10.5917 8.80833V12.9167H12.9167ZM3.23333 4.63333C3.60464 4.63333 3.96073 4.48583 4.22328 4.22328C4.48583 3.96073 4.63333 3.60464 4.63333 3.23333C4.63333 2.45833 4.00833 1.825 3.23333 1.825C2.85982 1.825 2.5016 1.97338 2.23749 2.23749C1.97338 2.5016 1.825 2.85982 1.825 3.23333C1.825 4.00833 2.45833 4.63333 3.23333 4.63333ZM4.39167 12.9167V5.94167H2.08333V12.9167H4.39167Z" fill="black" />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1.41176C14.4479 1.65882 13.8528 1.82118 13.2361 1.89882C13.8671 1.52471 14.3547 0.931765 14.5841 0.218823C13.989 0.571765 13.3294 0.818824 12.6338 0.96C12.0674 0.352941 11.2715 0 10.3681 0C8.68308 0 7.30641 1.35529 7.30641 3.02824C7.30641 3.26824 7.33509 3.50118 7.38528 3.72C4.8327 3.59294 2.55975 2.38588 1.04685 0.557647C0.781549 1.00235 0.630975 1.52471 0.630975 2.07529C0.630975 3.12706 1.16874 4.05882 2.00048 4.58824C1.4914 4.58824 1.01816 4.44706 0.602295 4.23529V4.25647C0.602295 5.72471 1.66348 6.95294 3.06883 7.22824C2.61771 7.35031 2.14391 7.36723 1.68499 7.27765C1.87974 7.8794 2.26114 8.40594 2.77559 8.78325C3.29003 9.16055 3.91165 9.36967 4.55306 9.38118C3.46582 10.2286 2.11808 10.6866 0.731358 10.68C0.487572 10.68 0.243786 10.6659 0 10.6376C1.36233 11.4988 2.98279 12 4.71797 12C10.3681 12 13.4728 7.38353 13.4728 3.38118C13.4728 3.24706 13.4728 3.12 13.4656 2.98588C14.0679 2.56235 14.5841 2.02588 15 1.41176Z" fill="black" />
        </svg>
    );
}

export default Root;