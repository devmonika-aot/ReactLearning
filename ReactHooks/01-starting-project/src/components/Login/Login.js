import React, { useEffect, useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

//   -------useEffect()-------------
// useEffect() -> based on conditin, this function will executes.
// So, form validation will occur only after entering email and password.
// after entering evry text, useEffect will be executed, So lets make 500ms time gap,
// so if after 500ms , user doesn't press any value, useEffect will be executed

// -------useReduce()----------
// when two or more state are dependent on each other, then instead of creating separate two state, we can use
// useReduce() and combine both the step.
//  Here enteredEmail&emailIsValid  enteredPassword&passwordIsValid is dependent on eachother.
// once It call reducer function, the component will evaluate again.

const emailReducer = (state, action) => {
  if (action.type == "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type == "BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const paswwordReducer= (state,action) =>{
  if(action.type=="USER_INPUT"){
    return {value:action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type==="BLUR"){
    return{value:state.value, isValid: state.value.trim().length > 6}
  }
  return{value:'',isValid:false}
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // Here combining both onchnage (enteredEmail) and onblurred (emailIsValid) state
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const[passwordState,dispatchPassword]=useReducer(paswwordReducer,{
    value:'',
    isValid: null
  });

  useEffect(()=>{
    const identifier= setTimeout ( () => {
      console.log('checking Its executed after each 500ms or not')
      setFormIsValid(
        emailState.value.includes('@') && passwordState.value.trim().length > 6
      );
    },500);
    return () =>{
      clearTimeout(identifier)
    }

  },[emailState.isValid,passwordState.isValid])
  // the value will be store in emailState same as useState()
  // once we call dispatchEmail, It will call emailReducer function assign the return value to emailState
  // and re-evaluate the component again.
  /*
  useEffect(() => {
   
    const identifier= setTimeout ( () => {
      console.log('checking Its executed after each 500ms or not')
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    },500);
    return () =>{
      clearTimeout(identifier)
    }
  }, [enteredEmail, enteredPassword]);
  */

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"USER_INPUT", val: event.target.value})
    // setFormIsValid(
    //   emailState.value.includes('@') && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:"BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
