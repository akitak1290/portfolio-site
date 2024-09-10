import GithubCard from "../_components/GithubCard";
import { SectionPropType } from "./_utils";


function Projects(prop: SectionPropType) {
    const { nodeRef } = prop;

    return (
        <div className="projects section" id="projects" ref={nodeRef}>
            <h1>Projects.</h1>
            <p>Nec lobortis suspendisse magna convallis turpis metus natoque facilisi ornare. Sollicitudin conubia in scelerisque suspendisse congue ad platea torquent.</p>
            <div className="projects-cards-container">
                {[0, 1, 2, 3].map((_, index) => {
                    return (
                        <GithubCard
                            key={index}
                            repoName='lobortis suspendisse'
                            repoDescription='Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient purus donec dictumst vitae massa eget odio fusce. '
                            languageType='Tempor'
                            linkToRepo='http://localhost:5173/'
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;