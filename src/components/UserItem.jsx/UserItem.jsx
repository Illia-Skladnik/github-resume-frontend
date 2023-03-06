import { memo } from "react";
import { getInfo } from "../../utils/fetch";
import "./UserItem.scss";

export const UserItem = memo(({ user, setAllUsers, allUsers }) => {
  const { login, created_at, html_url, name, public_repos, repos_url, updated_at} = user;
  const handleDeleteUser = () => {
    const deleteUserURL = `http://localhost:8080/deleteUser/${login}`;
    getInfo(deleteUserURL);
    const newUsersArray = allUsers.filter(user => user.login !== login);
    setAllUsers(newUsersArray);
  };

  return (
    <ul className="UserItem">
      <li className="UserItem__item">
        <span className="UserItem__category-title">
          login:
        </span>
        <span className="UserItem__category-data">
          {" " + login}
        </span>
      </li>
      <li className="UserItem__item">
        <span className="UserItem__category-title">
          created_at:
        </span>
        <span className="UserItem__category-data">
          {" " + created_at}
        </span>
      </li>
      <li className="UserItem__item">
        <span className="UserItem__category-title">
          html_url:
        </span>
          <a
            target="_blank"
            href={html_url}
            className="UserItem__category-data UserItem__category-data--link"
            rel="noreferrer"
          >
            {' ' + html_url}
          </a>
      </li>
      <li className="UserItem__item">
        <span className="UserItem__category-title">
          name:
        </span>
        <span className="UserItem__category-data">
          {" " + name}
        </span>
      </li>
      <li className="UserItem__item">
        <span className="UserItem__category-title">
          public_repos:
        </span>
        <span className="UserItem__category-data">
          {" " + public_repos}
        </span>
      </li>
      <li className="UserItem__item">
        <span className="UserItem__category-title">
          repos_url:
        </span>
          <a
            href={`https://github.com/${login}?tab=repositories`}
            className="UserItem__category-data UserItem__category-data--link"
            target="_blank"
            rel="noreferrer"
          >
            {' ' + repos_url}
          </a>
      </li>
      <li className="UserItem__item">
        <span className="UserItem__category-title">
          updated_at:
        </span>
        <span className="UserItem__category-data">
          {" " + updated_at}
        </span>
      </li>
      <button
        onClick={handleDeleteUser}
        className="UserItem__del-btn"
      >
          Delete user
      </button>
    </ul>

  );
});

