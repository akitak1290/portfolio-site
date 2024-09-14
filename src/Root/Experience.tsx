import PreviewCard from "../_components/PreviewCard";
import useFetchBlogs from "../_hooks/useFetchBlogs";
import { SectionPropType } from "./_utils";

function Experience(prop: SectionPropType) {
    const { nodeRef } = prop;

    const { data, error, loading } = useFetchBlogs("highlight");
    return (
        <div className="experience section" id="experience" ref={nodeRef}>
            <h1>Experience.</h1>
            <p>Nec lobortis suspendisse magna convallis turpis metus natoque facilisi ornare. Sollicitudin conubia in scelerisque suspendisse congue ad platea torquent.</p>
            <div className="experience-cards-container">
                {error && <p>{error}</p>}
                {loading && <p>loading</p>}
                {data?.highLightBlogsMetaData?.map((metaData, index) => {
                    const parsedName = metaData[0].replace(/-/g, '--').replace(/ /g, '-');
                    return (
                        <PreviewCard
                            key={index}
                            title={metaData[0]}
                            description={metaData[1]}
                            imagePath={metaData[2]}
                            articleLink={`/experience/${parsedName}`} />
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;