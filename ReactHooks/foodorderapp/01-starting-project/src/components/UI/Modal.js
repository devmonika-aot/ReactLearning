import { Fragment } from "react";
import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";

const Backdrop = (props) => {
  return (<div className={classes.backdrop} onClick={props.onCloseCartBackdrop}></div> );
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
function Modal(props) {
  const renderPosition = document.getElementById("overlays");
  console.log(props)
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCartBackdrop={props.onCloseBackdrop}/>, renderPosition)}
      {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, renderPosition)}
    </Fragment>
  );
}

export default Modal;
