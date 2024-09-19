import PreviewCard, { PreviewCardPlaceholder } from "../_components/PreviewCard";
import useFetchBlogs from "../_hooks/useFetchBlogs";
import { SectionPropType } from "./_utils";

function Experience(prop: SectionPropType) {
    const { nodeRef } = prop;
    const { data, error, loading } = useFetchBlogs("highlight");

    if (error) {
        return (
            <Layout nodeRef={nodeRef}>
                <p>{error}</p>
            </Layout>
        );
    }

    if (loading) {
        return (
            <Layout nodeRef={nodeRef}>
                {
                    [0, 1, 2].map((_, index) => {
                        return (
                            <PreviewCardPlaceholder key={index} />
                        );
                    })
                }
            </Layout>
        )
    }

    return (
        <Layout nodeRef={nodeRef}>
            {
                data?.highLightBlogsMetaData?.map((metaData, index) => {
                    const parsedName = metaData[0].replace(/-/g, '--').replace(/ /g, '-');
                    return (
                        <PreviewCard
                            key={index}
                            title={metaData[0]}
                            description={metaData[1]}
                            imagePath={metaData[2]}
                            articleLink={`/experience/${parsedName}`} />
                    );
                })
            }
        </Layout>
    );
}

function Layout({ nodeRef, children }: { nodeRef?: React.MutableRefObject<null>, children: React.ReactNode }) {
    return (
        <div className="experience section" id="experience" ref={nodeRef}>
            <h1>Experience highlights.</h1>
            <div className="experience-cards-container">
                {children}
            </div>
        </div>
    );
}

export default Experience;