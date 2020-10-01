import React from "react";
import "./navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as actionType from "../store/actions/authCreater";

function Navbar(props) {
  const history = useHistory();

  const onSignOut = () => {
    props.signOut();
    history.push("/");
  };
  return (
    <div className="navbar">
      <MenuIcon className="menuicon" onClick={props.clicked} />
      <div className="navbar__left">
        <h1>MasTylE</h1>
        <ul>
          <li>
            <Link to="/">T-Shirts</Link>
          </li>
          <li>
            <a href="/#">About Us</a>
          </li>
          <li>
            <a href="/#">Reviews</a>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        {props.user === null ? (
          <Link to="/signin">Sign In</Link>
        ) : (
          <p onClick={onSignOut}>Sign Out</p>
        )}
        <strong>$ </strong>
        <Link to="/checkout">
          <ShoppingCartIcon />
          {props.basket.length}
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket.basket,
    user: state.user.idToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(actionType.signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
