import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        data={{
          id: "amount_" + props.id,
          type: Number,
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
export default MealItemForm;
