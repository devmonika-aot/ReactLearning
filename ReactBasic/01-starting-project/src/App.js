import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [newUser, setNewUser] = useState([]);

  const saveUserHandler = (uname, uage) => {
    setNewUser((prevState) => {
      return [...prevState, { name: uname, age: uage, id: Math.random().toString()}];
    });
    console.log(newUser)
  };

  return (
    <div>
      <AddUser onSaveUser={saveUserHandler} />
      <UserList users={newUser}/>
    </div>
  );
}
export default App;
