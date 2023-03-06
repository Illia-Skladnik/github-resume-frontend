import { memo } from "react";
import "./RepoCard.scss"

export const RepoCard = memo((props) => {
  const { repo } = props;
  const {
    full_name,
    name,
    created_at,
    language,
    stargazers_count,
    forks_count,
  } = repo;

  return (
    <div className="RepoCard">
      <div className="RepoCard__header">
        <h4>
          <a
            href={`https://github.com/${full_name}`}
            className="RepoCard__title-link"
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </h4>

        <p>
          {created_at.slice(0, 4)}
        </p>
      </div>

        <p>
          {language} {language && ' - '}Creator & Owner
        </p>

        <p>
        This repository has {stargazers_count} stars and {forks_count} forks. If you would like more information about this repository and my contributed code, please visit{' '}
        <a 
          href={`https://github.com/${full_name}`}
          target="_blank"
          rel="noreferrer"
        >
          the repo
        </a>
        {' '}on GitHub.
        </p>
    </div>
  );
});

