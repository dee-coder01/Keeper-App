import React from "react";
import Note from "./note";

function NoteList(props) {
  return (
    <>
      {props.state.NotesData.map((note) => (
        <Note
          title={note.title}
          content={note.content}
          key={note.key}
          id={note.key}
          dispatch={props.dispatch}
          isFavorite={props.state.Favorite.includes(note)}
        />
      ))}
    </>
  );
}

export default NoteList;
