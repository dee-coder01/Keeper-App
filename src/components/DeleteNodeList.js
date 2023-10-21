import React from "react";
import Note from "./note";
function DeleteNodeList(props) {
  return (
    <>
      {props.state.deleted.map((note) => (
        <Note
          title={note.title}
          content={note.content}
          key={note.key}
          id={note.key}
          dispatch={props.dispatch}
          isDeleteNote={true}
        />
      ))}
    </>
  );
}

export default DeleteNodeList;
