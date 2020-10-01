import React from "react";
import "./selectedproduct.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionTypes from "../store/actions/actionTypes";
import * as basketActionCreaters from "../store/actions/BasketActionCreater";

function SelectedProduct(props) {
  console.log(props.Tshirt);
  return (
    <div className="selectedproduct">
      <div className="container">
        <div className="image">
          <img src={props.Tshirt[0].img} alt="" />
        </div>
        <div className="product__title__price">
          <h1>{props.Tshirt[0].title}</h1>
          <p>Rs {props.Tshirt[0].price}</p>
        </div>
        <div className="form__input">
          <form className="form__div">
            <div className="form__bits">
              <label>Color:</label>
              <select name="colors">
                <option value="white">White</option>
                <option value="black">Black</option>
              </select>
            </div>
            <div className="form__bits">
              <label>Size:</label>
              <select name="size">
                <option value="small">S</option>
                <option vlaue="medium">M</option>
                <option value="large">L</option>
              </select>
            </div>
            <div className="form__button">
              <Link to="/checkout">
                <button
                  type="button"
                  onClick={() => props.addToBasket(props.Tshirt[0])}
                >
                  ADD TO CART
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (product) =>
      dispatch(basketActionCreaters.addToBasket(product)),
  };
};

export default connect(null, mapDispatchToProps)(SelectedProduct);
