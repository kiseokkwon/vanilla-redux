//import { createStore } from "redux";
import { configureStore, /* createAction, createReducer, */ createSlice } from "@reduxjs/toolkit";

/** Redux */
// const ADD = "ADD";
// const DELETE = "DELETE";
// const addToDo = text => {
//   return {
//     type: ADD,
//     text
//   };
// };
// const deleteToDo = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id)
//   };
// };

/** ReduxToolkit */
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

/** Redux */
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

/** ReduxToolkit */
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload)
// })

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter(toDo => toDo.id !== action.payload)
  }
});


/** Redux */
//const store = createStore(reducer);

/** ReduxToolkit */
//const store = configureStore({reducer});

const store = configureStore({reducer: toDos.reducer});

/** Redux, ReduxToolket */
// export const actionCreators = {
//   addToDo,
//   deleteToDo
// }

export const { add, remove } = toDos.actions;

export default store;