import React from "react";
import { Link } from "react-router-dom";
function Heading(props) {
  return (
    <header className="navbar">
      <h1>Keeper</h1>
      <ul className="navlinks">
        <li>
          <Link to="/">
            Home <span className="Badge">{props.state.NotesData.length}</span>
          </Link>
        </li>
        <li>
          <Link to="/add">Add new</Link>
        </li>
        <li>
          <Link to="/deleted">
            Deleted <span className="Badge">{props.state.deleted.length}</span>
          </Link>
        </li>
        <li>
          <Link to="favorite">
            Favorite{" "}
            <span className="Badge">{props.state.Favorite.length}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Heading;
