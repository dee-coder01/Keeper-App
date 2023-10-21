import React from "react";
import Card from "./ui/Card";
import FavoriteButton from "./ui/FevoriteButton";
import DeleteCard from "./ui/DeleteCard";

function Note(props) {
  return (
    <Card>
      {props.children}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DeleteCard dispatch={props.dispatch} id={props.id} />
      <FavoriteButton
        dispatch={props.dispatch}
        isFavorite={props.isFavorite}
        id={props.id}
      />
    </Card>
  );
}

export default Note;
