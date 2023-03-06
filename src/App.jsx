import { React, useState, memo } from 'react';
import { Main } from "./components/Main/Main";
import { NotFoundUser } from "./components/NotFoundUser/NotFoundUser";
import { UserPage } from "./components/UserPage/UserPage";
import { AllUsers } from "./components/AllUsers/AllUsers";
import './App.scss';


const App = memo(function App() {
  const [currentComponent, setCurrentComponent] = useState('main');
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <section className="App">
      {currentComponent === 'main' && (
        <Main
          setCurrentComponent={setCurrentComponent}
          setCurrentUser={setCurrentUser}
        />
      )}

      {currentComponent === 'UserPage' && (
        <UserPage
          currentUser={currentUser}
        />
      )}

      {currentComponent === 'NotFoundPage' && (
        <NotFoundUser />
      )}

      {currentComponent === 'allUsers' && (
        <AllUsers />
      )}
    </section>
  );
})

export default App;
