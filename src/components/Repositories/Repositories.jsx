import { useEffect, useState, memo } from "react";
import { fetchRepositories } from "../../utils/fetch";
import { RepoCard } from "../RepoCard/RepoCard";


export const Repositories = memo((props) => {
  const { repositories } = props;
  const [visibleRepositories, setVisibleRepositories] = useState([]);

  useEffect(() => {
    async function getRepositories(repositories) {
      const famousRepositories = await fetchRepositories(repositories);
      setVisibleRepositories(famousRepositories);
    }

    getRepositories(repositories);
  }, []);

  return (
    <div>
      {visibleRepositories.map(repo => (
        <RepoCard
          key={repo.id}
          repo={repo} 
        />
      ))}
    </div>
  );
});
