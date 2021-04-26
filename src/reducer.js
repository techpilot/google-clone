export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_ACTION_TERM: 'SET_ACTION_TERM',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_ACTION_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
