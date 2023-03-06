import { React, useState, useEffect, useRef, useCallback, memo } from 'react';
import { getInfo } from "../../utils/fetch";

import './Main.scss';

export const Main = memo((props) => {
  const [userInput, setUserInput] = useState('');
  const { setCurrentComponent, setCurrentUser } = props;
  const handleGetAllUsers = useCallback(() => setCurrentComponent('allUsers'), []);

  const editTodoField = useRef(null);

  const onFocusing = useCallback(() => {
    if (editTodoField.current) {
      editTodoField.current.focus();
    }
  }, []);

  useEffect(() => {
    onFocusing();
  }, []);

  const handleSubmit = useCallback(async (event) => {
    try {
      event.preventDefault();
      const BASE_URL = 'https://api.github.com/users/';
      const infoData = await getInfo(BASE_URL + userInput);

      setCurrentUser(infoData);
      setCurrentComponent('UserPage')

      getInfo(`http://localhost:8080/handleUser/${userInput}`)
    } catch (e) {
      setCurrentComponent('NotFoundPage');
    }
  }, [setCurrentComponent, setCurrentUser, userInput]);

  return (
      <main className="Main">
        <div className="Main__header">
          <h1 className="Main__title">my github resume</h1>
          <button
            onClick={handleGetAllUsers}
            className="Main__get-users-btn"
          >
            Get all Users from DB
          </button>
        </div>
      <p className="Main__description">Let's generate your GitHub resume!</p>
        <form
          onSubmit={handleSubmit}
        >
          <input
            ref={editTodoField}
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
            placeholder="Enter your GitHub username and click on generate"
            className="Main__name-input"
          />
          <button
            type="submit"
            className="Main__submit-btn"
          >
            Generate
          </button>

        </form>
      <p>Created by Illia Skladnik</p>
      </main>
  );
});