import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   -------useEffect()-------------
  /* UseEffect() -> With empty Array Condition
   We use useEffect() Hooks when we want to execute any function based on any conditions.
   Here, After refreshing every time, It is getting logged out so I used browser storage and set one flag
   based on the flag value, My application is not getting loggedin/loggedout.
  
  [] ->  empty array dependency means It will load only once. So 
        1) first time It will execute when JSX render to 
        DOM ( application loads for the first time)
        2) On every refresh, It will execute once.

  */
  useEffect(() => {
    const latestLogedInValue = localStorage.getItem("isLoggedIn");
    if (latestLogedInValue == 1) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
