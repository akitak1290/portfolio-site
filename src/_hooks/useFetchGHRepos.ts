import { useEffect, useState } from "react";

export interface RepoDataType {
    "name": string,
    "description": string,
    "language": string,
    "link": string
}

function useFetchGHRepos() {
    const [data, setData] = useState<RepoDataType[]>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function onLoad() {
            try {
                setLoading(true);

                const response = await fetch('https://api.github.com/users/akitak1290/repos', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error('Network problem');
                }

                const result = await response.json();
                const pinnedRepo = result.filter(
                    (repo: { topics: string[] }) => repo.topics.find((topic: string) => topic == "pinned"));

                setData(
                    pinnedRepo.map(
                        (repo: { name: string; description: string; language: string; html_url: string; }) => {
                            return {
                                "name": repo.name,
                                "description": repo.description,
                                "language": repo.language,
                                "link": repo.html_url
                            }
                        }
                    )
                );
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        onLoad();
    }, []);

    return { data, error, loading }
}

export default useFetchGHRepos;