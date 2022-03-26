const initialState = {
  listData: [],
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STOCK':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'REPLACE_STOCK':
      return {
        ...state,
        ...action.value,
      };
    case 'RESET_STOCK':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default stockReducer;
