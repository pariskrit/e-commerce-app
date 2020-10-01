import * as actionTypes from "./actionTypes";
import db from "../../firebase";

export const addToBasket = (product) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: product,
  };
};

export const removeItems = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id: id,
  };
};

export const updateItems = (productId, quantity) => {
  return {
    type: actionTypes.UPDATE_ITEM,
    product: { id: productId, quantity: quantity },
  };
};

export const initProducts = (products) => {
  return {
    type: actionTypes.GET_TSHIRTS,
    payload: products,
  };
};

export const getProducts = () => {
  return (dispatch) => {
    let tshirts = [];
    db.collection("Products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tshirts.push(doc.data());
        });
        dispatch(initProducts(tshirts));
      });
  };
};
