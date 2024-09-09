import { useState } from "react";

const anchors = ["profile", "experience", "projects", "blog", "contact"]

interface PropType {
    isVisibleIndex: number
}

function SideNavControl({isVisibleIndex}: PropType) {
    console.log(isVisibleIndex)
    const [activeLink, setActiveLink] = useState(0);

    // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
    // console.log(isVisibleIndex, activeLink)
    // this feels hacky, TODO: refactor this and check test for rerenders
    let calActiveLink: number;
    if (isVisibleIndex !== activeLink){
        calActiveLink = isVisibleIndex;
        setActiveLink(calActiveLink);
    } else calActiveLink = activeLink;

    return (
        <div className="side-nav-control">
            <ul>
                {anchors.map((anchor, index) => {
                    return (
                        <li key={index}>
                            <div className={`side-nav-control-link ${calActiveLink == index ? "side-nav-control-link-active" : ""}`}
                                onClick={() => setActiveLink(index)}>
                                <a href={`/#${anchor}`}></a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideNavControl;