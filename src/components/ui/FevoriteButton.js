import React from "react";

function FevoriteButton(props) {
  function febHandler() {
    console.log(props);
    props.dispatch({ type: "feborite", target: props.id });
  }
  return (
    <div>
      {props.isFavorite ? (
        <button onClick={febHandler} className="feb-icon Badge">
          ⭐
        </button>
      ) : (
        <button onClick={febHandler} className="feb-icon ">
          ⭐
        </button>
      )}
    </div>
  );
}

export default FevoriteButton;
