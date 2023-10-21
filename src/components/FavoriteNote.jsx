import React from "react";
import Note from "./note";

export default function FavoriteNote(props) {
  return (
    <div>
      {props.state.Favorite.map((note) => (
        <Note
          title={note.title}
          content={note.content}
          key={note.key}
          id={note.key}
          dispatch={props.dispatch}
          isFavorite={props.state.Favorite.includes(note)}
        />
      ))}
    </div>
  );
}
