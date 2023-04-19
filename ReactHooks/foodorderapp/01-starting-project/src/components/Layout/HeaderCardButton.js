import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

function HeaderCardButton(props) {
  //Three span for 1. SVG image 2. badge i.e text that we want to show 3. number of items in the cart

  const ctxCart=useContext(CartContext);

  const numberOfItems = ctxCart.items.length;
  return (
    <button className={classes.button} onClick={props.onClickOnShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>Your Cart</span>
      <span>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCardButton;
