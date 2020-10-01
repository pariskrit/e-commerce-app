import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userId: null,
  idToken: null,
  errorMessage: "",
  wasInCheckOut: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_USER:
      return {
        ...state,
        userId: action.userId,
        idToken: action.idToken,
      };
    case actionTypes.ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };

    case actionTypes.WAS_IN_CHECKOUT:
      return {
        ...state,
        wasInCheckOut: true,
      };

    case actionTypes.SIGNOUT_USER:
      return {
        userId: null,
        idToken: null,
        errorMessage: "",
        wasInCheckOut: false,
      };

    default:
      return state;
  }
};

export default userReducer;
