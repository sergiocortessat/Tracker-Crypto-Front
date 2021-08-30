const initialState = {
  goals: [],
};

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_GOALS':
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
};

export default goalReducer;
