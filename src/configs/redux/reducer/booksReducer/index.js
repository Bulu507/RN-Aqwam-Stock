const initialState = {
  listData: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'REPLACE_BOOKS':
      return {
        ...state,
        ...action.value,
      };
    case 'RESET_BOOKS':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default booksReducer;
