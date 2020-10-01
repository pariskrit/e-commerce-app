import * as actionCreater from "./actionTypes";
import db from "firebase";

export const signUpUser = (email, password) => {
  return {
    type: actionCreater.SIGNUP_USER,
    payload: {
      email: email,
      password: password,
    },
  };
};

export const signInUser = (userId, idToken) => {
  return {
    type: actionCreater.SIGNIN_USER,
    userId: userId,
    idToken: idToken,
  };
};

export const signUserUp = (email, password) => {
  return (dispatch) => {
    db.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        dispatch(signUpUser(email, password));
      })
      .catch((error) => console.log(error));
  };
};

export const setErrorMessage = (message) => {
  return {
    type: actionCreater.ERROR_MESSAGE,
    message: message,
  };
};

export const signUser = (user, wasInCheckOut) => {
  return (dispatch) => {
    db.auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        const user = db.auth().currentUser;

        user
          .getIdToken(true)
          .then((idToken) => {
            dispatch(signInUser(user.uid, idToken));
            console.log(new Date().getTime());
            localStorage.setItem("token", idToken);
            localStorage.setItem("userId", user.uid);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        dispatch(setErrorMessage(error.message));
      });
  };
};

export const signOutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: actionCreater.SIGNOUT_USER,
  };
};

export const signOut = () => {
  return (dispatch) => {
    db.auth()
      .signOut()
      .then((res) => {
        dispatch(signOutUser());
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
};

export const wasInCheckOut = () => {
  return {
    type: actionCreater.WAS_IN_CHECKOUT,
  };
};

export const checkCheckOut = () => {
  return (dispatch) => {
    dispatch(wasInCheckOut());
  };
};

export const authStateCheck = () => {
  return (dispatch) => {
    const idToken = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!idToken) {
      dispatch(signOut());
    } else {
      dispatch(signInUser(userId, idToken));
    }
  };
};
