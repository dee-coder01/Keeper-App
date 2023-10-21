import React from "react";

function focus(props) {
  return (
    <div className="focus">
      <div className="card">
        <div>
          <div>Are you sure?</div>
          <div className="buttons">
            <button className="btn" onClick={props.onClick}>
              Cancel
            </button>
            <button className="btn" onClick={props.onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default focus;
