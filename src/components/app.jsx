import React, { useReducer } from "react";
import Heading from "./Header";
import Footer from "./footer";
import Notes from "../Notes";
import AddNewNote from "./AddNewNote";
import { Routes, Route } from "react-router-dom";
import FavoriteNote from "./FavoriteNote";
import Reducer from "../reducers/NoteReducer";
import NoteList from "./NoteList";
import DeleteNodeList from "./DeleteNodeList";
const reducer = Reducer;
function App() {
  const [state, dispatch] = useReducer(reducer, {
    NotesData: Notes,
    deleted: [],
    Favorite: [],
  });
  return (
    <>
      <Heading state={state} />
      <Routes>
        <Route
          path="/"
          element={<NoteList state={state} dispatch={dispatch} />}
        />
        <Route
          path="/deleted"
          element={<DeleteNodeList state={state} dispatch={dispatch} />}
        />
        <Route path="/add" element={<AddNewNote dispatch={dispatch} />} />
        <Route
          path="/favorite"
          element={<FavoriteNote state={state} dispatch={dispatch} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
