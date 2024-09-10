import PreviewCard from "../_components/PreviewCard";
import { SectionPropType } from "./_utils";

function Experience(prop: SectionPropType) {
    const { nodeRef } = prop;

    return (
        <div className="experience section" id="experience" ref={nodeRef}>
            <h1>Experience.</h1>
            <p>Nec lobortis suspendisse magna convallis turpis metus natoque facilisi ornare. Sollicitudin conubia in scelerisque suspendisse congue ad platea torquent.</p>
            <div className="experience-cards-container">
                {[0, 1].map((_, index) => {
                    return (
                        <PreviewCard
                            key={index}
                            title='Justo lorem leo amet donec at ornare'
                            // imagePath='../assets/fstt_next_gen.png'
                            description='Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient purus donec dictumst vitae massa eget odio fusce.'
                            articleLink='/' />
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;