import classes from "./Header.module.css";
import React,{Fragment} from "react";
import mealsImage from "../../Assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";
function Header(props) {
    // Since class name contain -, we can't use clasess.className
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClickOnShowCart={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}> 
        <img src={mealsImage} alt="A table full of delious food"></img>
      </div>
    </Fragment>
  );
}

export default Header;
