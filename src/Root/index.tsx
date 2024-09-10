import SideNavControl from '../_components/SideNavControl';
import useElementInViewport from '../_hooks/useElementInViewport';

import Blog from './Blog';
import Contact from './Contact';
import Experience from './Experience';
import Profile from './Profile';
import Projects from './Projects';

const viewPortOption = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // need to fine tune this to account for the gap between sections
};

function Root() {

    const { containerRef: profileRef, isVisible: isProfileVisible } = useElementInViewport(viewPortOption);
    const { containerRef: experienceRef, isVisible: isExperienceVisible } = useElementInViewport(viewPortOption);
    const { containerRef: projectsRef, isVisible: isProjectsVisible } = useElementInViewport(viewPortOption);
    const { containerRef: blogRef, isVisible: isBlogVisible } = useElementInViewport(viewPortOption);
    const { containerRef: contactRef, isVisible: isContactVisible } = useElementInViewport(viewPortOption);

    // followed this to update this component based on prop
    // https://react.dev/learn/you-might-not-need-an-effect#updating-state-based-on-props-or-state
    const isVisibleIndex = [
        isProfileVisible,
        isExperienceVisible,
        isProjectsVisible,
        isBlogVisible,
        isContactVisible
    ].findIndex((isVisible) => isVisible)

    return (
        <div className="main">
            <Profile nodeRef={profileRef} />
            <Experience nodeRef={experienceRef} />
            <Projects nodeRef={projectsRef} />
            <Blog nodeRef={blogRef} />
            <Contact nodeRef={contactRef} />
            <SideNavControl
                key="side-nav-control"
                isVisibleIndex={isVisibleIndex} />
        </div>
    );
}

export default Root;