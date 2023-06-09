import Modal from '../UI/Modal';
import classes from './Cart.module.css'

function Cart(props){
    const cartItems = <ul className={classes['cart-items']}> {[
        {id:'c1', name:'Sushi',amount: 2,price:12.99}
    ].map(item => <li>{item.name}</li>)}</ul>

    return (
        <Modal onCloseBackdrop={props.onCloseCart}>
            {cartItems}
            <div>
                <span className={classes.total}>Total Amount</span>
                <span>32.65</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onclick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )

}
export default Cart;