import classes from './Input.module.css'

function Input(props){

    return <div className={classes.input}>
        <label htmlFor={props.data.id}>{props.label}</label>
        <input  {...props.data}></input>
    </div>
}
export default Input;

//  {...props.input} will  make Input of type dynamic. when we call Input component
// at that time we can give type of input.(text or number)