import store from "./store";

// Subscribe returns a function to unsubscribe from the store
// Subscribe runs whenever the store is updated
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "ADD_BUG",
  payload: { description: "Bug1" },
});

store.dispatch({
  type: "ADD_BUG",
  payload: { description: "Bug2" },
});

store.dispatch({
  type: "RESOLVE_BUG",
  payload: { id: 2 },
});

// store.dispatch({
//   type: "REMOVE_BUG",
//   payload: { id: 1 },
// });

// console.log(store.getState());
