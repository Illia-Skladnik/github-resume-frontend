import { Repositories } from "../Repositories/Repositories";
import { memo } from 'react';

import "./UserPage.scss"

export const UserPage = memo((props) => {
  const { currentUser } = props;
  const { repos_url } = currentUser;
  
  return (
    <div className="UserPage">
      <div className="UserPage__main-info">
        <h1 className="UserPage__title">{currentUser.name}</h1>
        <p>GitHub user</p>
        <p>On GitHub since {currentUser.created_at.slice(0, 4)}, {currentUser.name} is a developer with
          {' '}
          <a 
            href={`https://github.com/${currentUser.login}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            {currentUser.public_repos} public repositories.
          </a>
        </p>
      </div>

      <Repositories
        repositories={repos_url}
      />

      <p>
        About This Résumé
        This résumé is generated automatically using public information from the developer's GitHub account. The repositories are ordered by popularity based on a very simple popularity heuristic that defines the popularity of a repository by its sum of watchers and forks. Do not hesitate to visit 
        {' '}
        <a
          href={`https://github.com/${currentUser.login}`}
          target="_blank"
          rel="noreferrer"
        >
        {currentUser.name}'s GitHub page
        </a>{' '}
        for a complete work history.
      </p>

    </div>

  );
});