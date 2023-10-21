const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      const data = state.NotesData.filter((note) => note.key === action.target);
      return {
        NotesData: state.NotesData.filter((note) => note.key !== action.target),
        deleted: [...state.deleted, ...data],
        Favorite: state.Favorite.filter((note) => note.key !== action.target),
      };

    case "feborite":
      let Febdata = state.Favorite.filter((note) => note.key === action.target);
      if (Febdata.length > 0) {
        return {
          NotesData: state.NotesData,
          deleted: [...state.deleted],
          Favorite: state.Favorite.filter((note) => note.key !== action.target),
        };
      } else
        Febdata = state.NotesData.filter((note) => note.key === action.target);
      return {
        NotesData: state.NotesData,
        deleted: [...state.deleted],
        Favorite: [...state.Favorite, ...Febdata],
      };

    case "Add":
      const Note = action.payload;
      return {
        NotesData: [...state.NotesData, Note],
        deleted: state.deleted,
        Favorite: state.Favorite,
      };
    default:
      break;
  }
};

export default reducer;
