import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basket: [],
  tShirts: [],
};

export const getTotalPrice = (basket) => {
  const totalPrice = basket.reduce(
    (amount, item) => amount + item.price * item.quantity,
    0
  );
  return totalPrice;
};

export const getProductPrice = (product) => {
  const totalPrice = product.quantity * product.price;

  return totalPrice;
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        basket: [...state.basket, action.payload],
        tShirts: [...state.tShirts],
      };

    case actionTypes.REMOVE_ITEM:
      const oldBasket = [...state.basket];
      const newBasket = oldBasket.filter((item) => item.id !== action.id);
      return {
        ...state,
        basket: newBasket,
      };

    case actionTypes.UPDATE_ITEM:
      const prevBasket = [...state.basket];
      const productIndex = prevBasket.findIndex(
        (item) => item.id === action.product.id
      );

      const toUpdateProduct = { ...prevBasket[productIndex] };
      toUpdateProduct.quantity = action.product.quantity;
      prevBasket[productIndex] = toUpdateProduct;

      return {
        ...state,
        basket: prevBasket,
      };
    case actionTypes.GET_TSHIRTS:
      return {
        ...state,
        tShirts: [...action.payload],
      };
    default:
      return state;
  }
};

export default basketReducer;
