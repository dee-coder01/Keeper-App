import React, { useReducer } from "react";
import Backdrop from "../backdrop";
import Focus from "../focus";
import reducer from "../../reducers/toggleReducer";
function DeleteCard(props) {
  const [state, dispatch] = useReducer(reducer, {
    focusElement: false,
  });
  function deleteHandler() {
    dispatch({
      type: "toggleFocus",
    });
  }
  function deleteConfirm() {
    dispatch({
      type: "toggleFocus",
    });
    props.dispatch({ type: "delete", target: props.id });
  }
  return (
    <>
      <button onClick={deleteHandler}>📭</button>
      {state.focusElement && <Backdrop onClick={deleteHandler} />}
      {state.focusElement && (
        <Focus onClick={deleteHandler} onDelete={deleteConfirm} />
      )}
    </>
  );
}

export default DeleteCard;
