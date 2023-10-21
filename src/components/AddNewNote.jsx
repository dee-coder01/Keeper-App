import React from "react";

export default function AddNewNote(props) {
  const addHandler = (event) => {
    event.preventDefault();
    let Title = document.querySelector(".title").value;
    let content = document.querySelector(".content").value;
    props.dispatch({
      type: "Add",
      payload: {
        key: Math.floor(Math.random() * 16 + 1 + Math.random() * 16)
          .toString(16)
          .toUpperCase(),
        title: Title,
        content,
      },
    });
    Title = "";
    content = "";
  };
  return (
    <div className="add">
      <form className="addForm">
        <input placeholder="Enter the Title" className="inputAdd title"></input>
        <textarea
          rows={4}
          placeholder="Enter the content"
          className="inputAdd content"
          spellCheck={false}
        />
        <button type="submit" onClick={addHandler}>
          Add
        </button>
      </form>
    </div>
  );
}
