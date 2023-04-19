
import { Fragment } from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

function MealItem(props){
return (

    <li className={classes.meal}>
        <div>
        <div><h3>{props.meal.name}</h3></div>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>${props.meal.price.toFixed(2)}</div>
        </div>
        <div>
            <MealItemForm/>
        </div>
    </li>
    
)

}

export default MealItem;