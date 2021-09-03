const initialState = {
  coins: [],
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_COINS':
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
};

export default coinReducer;
