let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_BUG":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "REMOVE_BUG":
      return state.filter((bug) => bug.id != action.payload.id);
    case "RESOLVE_BUG":
      return state.map((bug) => {
        bug.id == action.payload.id ? { ...bug, resolved: true } : bug;
        return bug;
      });
    default:
      return state;
  }
}
