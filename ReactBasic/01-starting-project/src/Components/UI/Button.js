import classes from './Button.module.css'

function Button(props){

    return (
        <button className={classes.button} type={props.type || 'button' } onClick={props.onClick}>
            {props.children}
        </button>
    )
}
// onClick={props.onClick} - we are not passing onclick parameter from AddUser to Button.js.
export default Button;