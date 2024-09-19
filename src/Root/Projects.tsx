import GithubCard, { GithubCardPlaceholder } from "../_components/GithubCard";
import useFetchGHRepos from "../_hooks/useFetchGHRepos";
import { SectionPropType } from "./_utils";

function Projects(prop: SectionPropType) {
    const { nodeRef } = prop;
    const { data, loading, error } = useFetchGHRepos();

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
                    Array.from({ length: 3 }).map((_, index) => {
                        return (
                            <GithubCardPlaceholder key={index} />
                        );
                    })
                }
            </Layout>
        );
    }

    return (
        <Layout nodeRef={nodeRef}>
            {
                data?.slice(0, 6).map((repo, index) => {
                    return (
                        <GithubCard
                            key={index}
                            repoName={repo.name}
                            repoDescription={repo.description}
                            languageType={repo.language}
                            linkToRepo={repo.link}
                        />
                    );
                })
            }
        </Layout>
    );
}

function Layout({ nodeRef, children }: { nodeRef?: React.MutableRefObject<null>, children: React.ReactNode }) {
    return (
        <div className="projects section" id="projects" ref={nodeRef}>
            <h1>Projects.</h1>
            <p>Here are some of the applications, small tools, and other stuff I have worked on, fetched directly from GitHub.</p>
            <div className="projects-cards-container">
                {children}
            </div>
        </div>
    );
}

export default Projects;