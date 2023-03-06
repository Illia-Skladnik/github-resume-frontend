import { getInfo } from "../../utils/fetch";
import { useEffect, useState, memo } from "react";
import { UserItem } from "../UserItem.jsx/UserItem";

import "./AllUsers.scss"

export const AllUsers = memo(() => {
  const [allUsers, setAllUsers] = useState([]);
  const url = 'http://localhost:8080/getAll';
  
  useEffect(() => {
    async function getAllUsers() {
      const allUsers = await getInfo(url);
      setAllUsers(allUsers);
    }
    
    getAllUsers();
  }, []);

  return (
    <div className="AllUsers">
      <h1 className="AllUsers__title">
        Total users in database: {allUsers.length}
      </h1>
      
      {allUsers.map(user => (
        <UserItem
          key={user._id}
          user={user}
          setAllUsers={setAllUsers}
          allUsers={allUsers}
        />
      ))}
    </div>
  );
});
