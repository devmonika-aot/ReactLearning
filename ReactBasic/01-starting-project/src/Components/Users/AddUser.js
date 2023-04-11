import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";

function AddUser(props) {
  const [newuser, setNewUserName] = useState("");
  const [userAge, setNewUserAge] = useState("");
  const [error, setError] = useState("");

  const userNameHandler = (event) => {
    // console.log(event.target.value);
    setNewUserName(event.target.value);
  };
  const ageHandler = (event) => {
    // console.log(event.target.value)
    setNewUserAge(event.target.value);
  };
  const submitUserHandler = (event) => {
    // console.log(event.target.value) doesn't work because we use submit handler not to get text from input
    // Submit handler can be use to send the data to parent node, clear the input box etc
    event.preventDefault();
    //console.log(newuser.trim().length + ' ' + userAge.trim().length)

    if (+userAge < 0) {
      // + typecasting to number
      setError({
        title: " Invalid Age ",
        message: "Please entered valid age ( non-negative number)",
      });
      return;
    }

    if (newuser.trim().length == 0 || userAge.trim().length == 0) {
      setError({
        title: " Invalid Input ",
        message: "Please entered the valid name and age (non-empty)",
      });
      return;
    }

    props.onSaveUser(newuser, userAge);
    setNewUserName("");
    setNewUserAge("");
  };

  const errorClickHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorClickHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={submitUserHandler}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            onChange={userNameHandler}
            value={newuser}
          />
          <label htmlFor="age">age</label>
          <input type="number" id="age" onChange={ageHandler} value={userAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
//<label for="username">Username</label>
//<input type="text" id="username" name="username" />
// Now when the user clicks with the mouse on the username text the browser will automatically put the focus in the corresponding input field
