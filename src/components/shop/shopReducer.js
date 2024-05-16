const shopReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      break;
  }
};

export default shopReducer;
